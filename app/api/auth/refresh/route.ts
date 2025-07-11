import {NextResponse} from "next/server";
import {tokens} from "@/utils/enums";
import GetUserFromCookies from "@/utils/GetUserFromCookies";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {setAuthCookies} from "@/utils/setAuthCookies";
import {getDb} from "@/utils/mongodb";


export async function GET(){
    return NextResponse.json({ message: "GET method not allowed" }, { status: 405 });
}
export async function POST(){
    try{
        const user = await GetUserFromCookies(tokens.REFRESH_TOKEN)
        const accessToken = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_REFRESH_SECRET as string, { expiresIn: '7d' });
        const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
        const db = await getDb()
        if(!db){
            return NextResponse.json({message:'Database connection failed'},{ status: 500 })
        }
        const refreshTokens = db.collection('refreshTokens')
        const addToken = await refreshTokens.updateOne({userId:user._id},{$set:{token:hashedRefreshToken}},{upsert:true})
        if(!addToken.acknowledged){
            return NextResponse.json({message:'Failed to update refresh token'}, {status:500})
        }
        const response = NextResponse.json({message:'Token refreshed successfully',user:user});
        return setAuthCookies(response,accessToken,refreshToken)
    }catch(e){
        const error = e as Error
        console.error({message:error.message})
        if(error.message==='Token not found or expired')
            return NextResponse.json({message:'Refresh token not found or expired',user:null})
        return NextResponse.json({message:'Internal server error'}, {status:500})
    }
}