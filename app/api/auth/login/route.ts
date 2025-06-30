import {NextRequest, NextResponse} from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {getDb} from "@/utils/mongodb";
import {loginLimiter} from "@/utils/rateLimit";

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
        if(!password){
            return NextResponse.json({ message: 'Missing password' }, { status: 400 });
        }
        const username = formData.get('username')?.toString()
        if(!username){
            return NextResponse.json({ message: 'Missing username' }, { status: 400 });
        }
        const db = await getDb()
        if(!db){
            return NextResponse.json({message:'Database connection failed'},{ status: 500 })
        }
        const usersCollection = db.collection('users')
        const user = await usersCollection.findOne({username:formData.get('username')?.toString()})
        if(!user) {
            return NextResponse.json({message: 'Invalid username or password'},{ status: 401 })
        }
        const isPasswordValid = await bcrypt.compare(password, user.hashedPassword)
        if(!isPasswordValid){
            return NextResponse.json({message:'Invalid username or password'},{ status: 401 })
        }
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '2h' });
        const response = NextResponse.json('Logged in successfully')
        response.cookies.set('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 60 * 60,path: '/', sameSite: 'lax' });
        return response
    }catch(e){
        const error = e as Error
        console.error(error.message)
        return NextResponse.json({message:'Internal server error'}, {status:500})
    }
}