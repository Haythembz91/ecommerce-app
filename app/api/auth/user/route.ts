import {NextResponse} from "next/server";
import GetUserFromCookies from "@/utils/GetUserFromCookies";
import {tokens} from "@/utils/enums";

export async function GET(){
    try{
        const user = await GetUserFromCookies(tokens.ACCESS_TOKEN)
        if (!user) {
            return NextResponse.json({message: 'User not found'})
        }
        return NextResponse.json({user:user})
    }catch(e){
        const error = e as Error
        console.error(error.message)
        if (error.message==='Token expired')
            return NextResponse.json({message:'Token expired'}, {status:401})
        return NextResponse.json({message:error.message})
    }
}