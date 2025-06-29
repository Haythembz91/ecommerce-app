import {NextRequest, NextResponse} from "next/server";
import {getDb} from "@/utils/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {User} from "@/utils/interfaces";
import {roles} from "@/utils/enums";
export async function POST(req:NextRequest){
    try{
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
        await usersCollection.createIndex({ username: 1 }, { unique: true });
        const existingUser = await usersCollection.findOne({ username: user.username });
        if (existingUser) {
            return NextResponse.json({ message: 'Username already exists' }, { status: 409 })
        }
        await usersCollection.createIndex({ email_address: 1 }, { unique: true });
        const existingEmail = await usersCollection.findOne({ email_address: user.email_address });
        if (existingEmail) {
            return NextResponse.json({ message: 'Email Address already in use' }, { status: 409 })
        }
        const result = await usersCollection.insertOne(user)
        if(!result.acknowledged){
            return NextResponse.json({message:'register failed'},{status:500})
        }
        const token = jwt.sign({ userId: result.insertedId, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        const response = NextResponse.json('User registered successfully')
        response.cookies.set('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 60 * 60,path: '/', sameSite: 'lax' });
        return response
    }catch(e){
        const error = e as Error
        console.error(error)
        return NextResponse.json({message:error.message})
    }
}