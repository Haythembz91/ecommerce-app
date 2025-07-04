import { NextResponse} from "next/server";
import {cookies} from "next/headers";
import {tokens} from "@/utils/enums";


export async function GET(){
    try{
        const cookieStore = await cookies()
        cookieStore.delete(tokens.ACCESS_TOKEN)
        cookieStore.delete(tokens.REFRESH_TOKEN)
        return NextResponse.json({message:'Logout successful'})
    }catch(e){
        const error = e as Error
        console.error(error.message)
        return NextResponse.json({message:error.message})
    }
}