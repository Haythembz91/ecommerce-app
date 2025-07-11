import {NextRequest, NextResponse} from "next/server";
import {getDb} from "@/utils/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {User} from "@/utils/interfaces";
import {roles} from "@/utils/enums";
import {loginLimiter} from "@/utils/rateLimit";
import {setAuthCookies} from "@/utils/setAuthCookies";

function isPasswordValid(password:string) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
}

function isEmailValid(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


export async function GET() {
    return NextResponse.json({ message: "GET method not allowed" }, { status: 405 });
}
export async function POST(req:NextRequest){
    try{
        const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
        const {success} = await loginLimiter.limit(ip);
        if(!success){
            return NextResponse.json({message:'Too many requests'}, {status:429})
        }
        const formData = await req.formData();
        const username = formData.get('username')?.toString().toLowerCase()
        if(!username){
            return NextResponse.json({ message: 'Missing username' }, { status: 400 });
        }
        const email_address = formData.get('email_address')?.toString().toLowerCase()
        if(!email_address || !isEmailValid(email_address)){
            return NextResponse.json({ message: 'Missing email address or invalid email' }, { status: 400 });
        }
        const password = formData.get('password')?.toString()
        const confirmPassword = formData.get('confirmPassword')?.toString()
        if (!password || !confirmPassword) {
            return NextResponse.json({ message: 'Missing password fields' }, { status: 400 })
        }
        if (!isPasswordValid(password)) {
            return NextResponse.json({ message: 'Invalid password' }, { status: 400 })
        }
        if (password !== confirmPassword) {
            return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user:User = {
            username: username,
            avatar:null,
            email_address: email_address,
            hashedPassword: hashedPassword,
            role:roles.USER,
        }
        const db = await getDb()
        const usersCollection = db.collection('users')
        const existingUser = await usersCollection.findOne({ username: user.username });
        if (existingUser) {
            return NextResponse.json({ message: 'Username already exists' }, { status: 409 })
        }
        const existingEmail = await usersCollection.findOne({ email_address: user.email_address });
        if (existingEmail) {
            return NextResponse.json({ message: 'Email Address already in use' }, { status: 409 })
        }
        const result = await usersCollection.insertOne(user)
        if(!result.acknowledged){
            return NextResponse.json({message:'register failed'},{status:500})
        }
        const accessToken = jwt.sign({ userId: result.insertedId, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ userId: result.insertedId, role: user.role }, process.env.JWT_REFRESH_SECRET as string, { expiresIn: '7d' });
        const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
        const refreshTokens = db.collection('refreshTokens');
        const addRefreshToken = await refreshTokens.insertOne({ token: hashedRefreshToken, userId: result.insertedId });
        if(!addRefreshToken.acknowledged){
            return NextResponse.json({message:'Failed to add refresh token'},{ status: 500 })
        }
        const response = NextResponse.json({message:'User registered successfully'});
        return setAuthCookies(response,accessToken,refreshToken)
    }catch(e){
        const error = e as Error
        console.error(error.message)
        return NextResponse.json({message:'Internal server error'}, {status:500})
    }
}