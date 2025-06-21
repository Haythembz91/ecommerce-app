import {NextResponse} from "next/server";
import {getDb} from "@/utils/mongodb";
import {cookies} from "next/headers";

export async function GET(){
    try{
        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value
        console.log(token)
        return NextResponse.json({token:token})
    }catch(e){
        const error = e as Error
        console.error(error)
        return NextResponse.json({message:error.message})
    }
}