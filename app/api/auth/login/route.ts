import {NextRequest, NextResponse} from "next/server";


export async function POST(req:NextRequest){
    const formData = await req.formData();
    for(const [key,value] of formData.entries()){
        console.log(key,value)
    }
    return NextResponse.json({message:'login'})
}