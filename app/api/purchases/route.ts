import GetPurchases from "@/utils/GetPurchases";
import getUserFromCookies from "@/utils/GetUserFromCookies";
import {NextRequest, NextResponse} from "next/server";


export async function GET(req:NextRequest){
    try{
        const requestedWith = req.headers.get('x-requested-with')
        if(requestedWith !== 'XMLHttpRequest'){
            return NextResponse.json({message:'Invalid Request'}, {status: 400})
        }
        const user = await getUserFromCookies();
        if (!user){
            return NextResponse.json({message: 'User not found'},{ status: 401 })
        }
        const purchases = await GetPurchases(user._id.toString())
        if(!purchases){
            return NextResponse.json({message: 'Purchases not found'},{ status: 401 })
        }
        return NextResponse.json(purchases.sort((a,b)=>new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime()))
    }catch(e){
        const error = e as Error
        console.error(error.message)
    }
}