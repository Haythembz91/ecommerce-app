import {NextResponse} from "next/server";
import GetUserFromCookies from "@/utils/GetUserFromCookies";
import {tokens} from "@/utils/enums";

export async function GET(){
    try{
        const user = await GetUserFromCookies(tokens.ACCESS_TOKEN)
        return NextResponse.json({user:user})
    }catch(e){
        const error = e as Error
        console.error({message:error.message})
        if(error.message==='Token not found or expired')
            return NextResponse.json({message:error.message,user:null})
        return NextResponse.json({message:'Internal server error'}, {status:500})
    }
}