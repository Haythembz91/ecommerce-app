
import {NextRequest,NextResponse} from "next/server";
import connectDatabase from "@/lib/mongodb";

export const GET = async (req:NextRequest,res:NextResponse)=>{
    console.log(req)
    try{
        const client = await connectDatabase
        const db = client.db('sample_mflix')
        const users = db.collection('users').find({}).toArray()
        return NextResponse.json({users})
    }catch(e){
        console.error(e)
        return NextResponse.json(e)
    }
}