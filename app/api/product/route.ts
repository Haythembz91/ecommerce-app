import {NextResponse, NextRequest} from "next/server";

export async function POST(req:NextRequest){
    try {
        const body = await req.json()
        console.log(body)
        return NextResponse.json({message:'Product Created Successfully'}, {status: 201})
    } catch (error) {
        console.error(error)
    }
    
}