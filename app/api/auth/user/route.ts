import {NextResponse} from "next/server";
import GetUserFromCookies from "@/utils/GetUserFromCookies";

export async function GET(){
    try{
        const user = await GetUserFromCookies()
        if (!user) {
            return NextResponse.json({message: 'User not found'},{ status: 401 })
        }
        return NextResponse.json(user)
    }catch(e){
        const error = e as Error
        console.error(error)
        return NextResponse.json({message:error.message})
    }
}