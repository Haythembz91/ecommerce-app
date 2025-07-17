import {NextResponse} from "next/server";
import {getDb} from "@/utils/mongodb";
import GetUserFromCookies from "@/utils/GetUserFromCookies";
import {ObjectId} from "mongodb";
import {tokens} from "@/utils/enums";


export async function DELETE(){
    try{
        const user = await GetUserFromCookies(tokens.ACCESS_TOKEN)
        if (!user) {
            return NextResponse.json({message: 'User not found'})
        }
        const db = await getDb()
        if(!db){
            return NextResponse.json({message:'Database connection failed'},{ status: 500 })
        }
        const usersCollection = db.collection('users')
        const deleteUser = await usersCollection.deleteOne({_id:new ObjectId(user._id)})
        if (!deleteUser.acknowledged) {
            return NextResponse.json({message: 'Cant delete user'},{status:500})
        }
        const deleteToken = await db.collection('refreshTokens').deleteMany({userId:user._id})
        if(!deleteToken.acknowledged){
            return NextResponse.json({message:'Cant delete refresh token'},{status:500})
        }
        const response = NextResponse.json({message:'User deleted successfully'})
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