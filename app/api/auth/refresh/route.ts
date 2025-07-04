import {NextResponse} from "next/server";
import {tokens} from "@/utils/enums";
import GetUserFromCookies from "@/utils/GetUserFromCookies";
import jwt from "jsonwebtoken";


export async function GET(){
    return NextResponse.json({ message: "GET method not allowed" }, { status: 405 });
}
export async function POST(){
    try{
        const user = await GetUserFromCookies(tokens.REFRESH_TOKEN)
        if(!user){
            return NextResponse.json({message:'User not found'})
        }
        const accessToken = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        const response = NextResponse.json({message:'Token refreshed successfully'});
        response.cookies.set('accessToken', accessToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 60 * 60,path: '/', sameSite: 'lax' });
        return response
    }catch(e){
        const error = e as Error
        console.error(error.message)
        return NextResponse.json({message:error.message})
    }
}