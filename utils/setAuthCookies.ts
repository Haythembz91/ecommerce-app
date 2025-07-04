import {NextResponse} from "next/server";
import {tokens} from "@/utils/enums";


export const setAuthCookies = (response:NextResponse,accessToken:string,refreshToken:string) => {
    const options={
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax' as const,
    }
    response.cookies.set(tokens.ACCESS_TOKEN,accessToken, {...options,maxAge:60*60});
    response.cookies.set(tokens.REFRESH_TOKEN,refreshToken, {...options,maxAge:60*60*24*7});

    return response
}