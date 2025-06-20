import {NextRequest, NextResponse} from "next/server";
import {getDb} from "@/utils/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {User} from "@/utils/interfaces";
export async function POST(req:NextRequest){
    const formData = await req.formData();
    const password = formData.get('password')?.toString()
    const confirmPassword = formData.get('confirmPassword')?.toString()
    if (!password || !confirmPassword) {
        return NextResponse.json({ error: 'Missing password fields' }, { status: 400 })
    }
    if (password !== confirmPassword) {
        return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user:User = {
        username: formData.get('username')?.toString(),
        email_address: formData.get('email_address')?.toString(),
        hashedPassword: hashedPassword
    }
    console.log(user)
    const db = await getDb()
    const usersCollection = db.collection('users')
    const result = await usersCollection.insertOne(user)
    return NextResponse.json({message:'register'})
}