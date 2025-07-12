import {NextRequest, NextResponse} from "next/server";
import {getDb} from "@/utils/mongodb";
import {User} from "@/utils/interfaces";
import {roles} from "@/utils/enums";
import jwt from "jsonwebtoken";
import {setAuthCookies} from "@/utils/setAuthCookies";
import bcrypt from "bcryptjs";
import {createRemoteJWKSet, jwtVerify} from "jose";



export async function GET(req:NextRequest){
    try{
        const code = req.nextUrl.searchParams.get('code');
        if(!code){
            return NextResponse.json({message:'Missing code'}, {status:400})
        }
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                client_id: process.env.GOOGLE_CLIENT_ID as string,
                client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
                redirect_uri: process.env.NODE_ENV === 'development' ? `${process.env.BASE_URL}/api/auth/google/callback` : `${process.env.PUBLIC_URL}/api/auth/google/callback`,
                code: code as string,
                grant_type: 'authorization_code'
            })
        })
        const tokenData = await tokenResponse.json()
        if(!tokenData){
            return NextResponse.json({message:'Failed to get token'}, {status:400})
        }
        const JWKS = createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'));
        const {payload} = await jwtVerify(tokenData.id_token, JWKS,{
            issuer: 'https://accounts.google.com',
            audience: process.env.GOOGLE_CLIENT_ID
        });
        if(!payload){
            return NextResponse.json({message:'Failed to get payload'}, {status:400})
        }
        const email = payload.email;
        if(!email){
            return NextResponse.json({message:'Failed to get email'}, {status:400})
        }
        const username = payload.name;
        if(!username){
            return NextResponse.json({message:'Failed to get username'}, {status:400})
        }
        const picture = payload.picture;
        if(!picture){
            return NextResponse.json({message:'Failed to get picture'}, {status:400})
        }
        const db = await getDb()
        if(!db){
            return NextResponse.json({message:'Database connection failed'},{ status: 500 })
        }
        const usersCollection = db.collection('users')
        const existingUser = await usersCollection.findOne({email_address:email})
        if(!existingUser){
            const user:User = {
                username:username as string,
                avatar:picture as string,
                email_address:email as string,
                hashedPassword:undefined,
                role:roles.USER
            }
            try{
                const insertUser = await usersCollection.insertOne(user)
                if(!insertUser.acknowledged){
                    return NextResponse.json({message:'Failed to insert user'}, {status:400})
                }
                const accessToken = jwt.sign({ userId: insertUser.insertedId, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
                const refreshToken = jwt.sign({ userId: insertUser.insertedId, role: user.role }, process.env.JWT_REFRESH_SECRET as string, { expiresIn: '7d' });
                const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
                const refreshTokens = db.collection('refreshTokens')
                const insertToken = await refreshTokens.insertOne({userId:insertUser.insertedId,token:hashedRefreshToken})
                if(!insertToken.acknowledged){
                    return NextResponse.json({message:'Failed to insert refresh token'}, {status:400})
                }
                const response = NextResponse.redirect(process.env.NODE_ENV==='development' ? `${process.env.BASE_URL}` : `${process.env.PUBLIC_URL}`);
                return setAuthCookies(response,accessToken,refreshToken)
            }catch(e){
                const error = e as {code:number, message:string}
                console.error(error.message)
                if(error.code===11000){
                    return NextResponse.redirect(new URL('/auth-error?reason=duplicate', req.url))
                }
                return NextResponse.redirect(new URL('/auth-error?reason=other', req.url))
            }
        }
        const accessToken = jwt.sign({ userId: existingUser._id, role: existingUser.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ userId: existingUser._id, role: existingUser.role }, process.env.JWT_REFRESH_SECRET as string, { expiresIn: '7d' });
        const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
        const refreshTokens = db.collection('refreshTokens')
        const addToken = await refreshTokens.updateOne({userId:existingUser._id},{$set:{token:hashedRefreshToken}},{upsert:true})
        if(!addToken.acknowledged){
            return NextResponse.json({message:'Failed to update refresh token'}, {status:500})
        }
        const response = NextResponse.redirect(process.env.NODE_ENV==='development' ? `${process.env.BASE_URL}` : `${process.env.PUBLIC_URL}`);
        return setAuthCookies(response,accessToken,refreshToken)
    }catch(e){
        const error = e as Error
        console.error(error.message)
        return NextResponse.json({message:error.message})
    }
}