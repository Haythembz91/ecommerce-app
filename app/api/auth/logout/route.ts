import { NextResponse} from "next/server";
import {cookies} from "next/headers";


export async function GET(){
    try{
        const cookieStore = await cookies()
        cookieStore.delete('token')
        return NextResponse.json({message:'Logout successful'})
    }catch(e){
        const error = e as Error
        console.error(error.message)
        return NextResponse.json({message:error.message})
    }
}