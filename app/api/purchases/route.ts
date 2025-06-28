import GetPurchases from "@/utils/GetPurchases";
import getUserFromCookies from "@/utils/GetUserFromCookies";
import {NextResponse} from "next/server";


export async function GET(){
    try{
        const user = await getUserFromCookies();
        if (!user){
            return NextResponse.json({message: 'User not found'},{ status: 401 })
        }
        const purchases = await GetPurchases(user._id.toString())
        return NextResponse.json(purchases)
    }catch(e){
        const error = e as Error
        console.error(error)
    }
}