import { NextResponse} from "next/server";
import {tokens} from "@/utils/enums";


export async function GET(){
    try{
        const response = NextResponse.json({message:'Logout successful'})
        response.cookies.set(tokens.ACCESS_TOKEN,'',{
            httpOnly: true,
            secure: true,
            path: '/',
            sameSite: 'lax' as const,
            maxAge: 0
        })
        response.cookies.set(tokens.REFRESH_TOKEN,'',{
            httpOnly: true,
            secure: true,
            path: '/',
            sameSite: 'lax' as const,
            maxAge: 0
        })
        return response
    }catch(e){
        const error = e as Error
        console.error(error.message)
        return NextResponse.json({message:error.message})
    }
}