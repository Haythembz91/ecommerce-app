import {NextRequest, NextResponse} from "next/server";
import {getDb} from "@/utils/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {User} from "@/utils/interfaces";
import {roles} from "@/utils/enums";
import {loginLimiter} from "@/utils/rateLimit";
import {setAuthCookies} from "@/utils/setAuthCookies";

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
        const password = formData.get('password')?.toString()
        const confirmPassword = formData.get('confirmPassword')?.toString()
        if (!password || !confirmPassword) {
            return NextResponse.json({ message: 'Missing password fields' }, { status: 400 })
        }
        if (password !== confirmPassword) {
            return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user:User = {
            username: formData.get('username')?.toString(),
            avatar:null,
            email_address: formData.get('email_address')?.toString(),
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
        const response = NextResponse.json({message:'User registered successfully'});
        return setAuthCookies(response,accessToken,refreshToken)
    }catch(e){
        const error = e as Error
        console.error(error.message)
        return NextResponse.json({message:'Internal server error'}, {status:500})
    }
}