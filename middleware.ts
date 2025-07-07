import {NextRequest, NextResponse} from "next/server";
import {roles, tokens} from "@/utils/enums";
import {jwtVerify} from "jose";
const protectedPaths = ['/admin','/auth','/api/checkout']

export async function middleware(req:NextRequest){

    const {pathname} = req.nextUrl
    const isProtected = protectedPaths.some((path) => pathname.startsWith(path))
    if(!isProtected){
        return NextResponse.next()
    }
    const token = req.cookies.get(tokens.ACCESS_TOKEN)?.value
    if(!token){
        if(pathname.startsWith('/api'))
        {
            console.log('No token found for the API checkout, returning 401 Unauthorized.');
            return NextResponse.json({message:'Unauthorized'}, {status:401});
        }
        if(!pathname.startsWith('/auth')){
            return NextResponse.redirect(new URL('/auth',req.url))
        }
        return NextResponse.next()
    }
    try{
        const {payload} = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
        const userRole = payload.role;
        if(pathname.startsWith('/admin')&&userRole!==roles.ADMIN){
            return NextResponse.rewrite(new URL('/404',req.url))
        }
        if(pathname.startsWith('/auth')){
            return NextResponse.redirect(new URL('/',req.url))
        }
        return NextResponse.next()
    }catch(e){
        const error = e as Error
        console.error({message:error.message})
        return NextResponse.json({message:'Internal server error'}, {status:500})
    }
}

export const config = {
    matcher:['/admin/:path*','/auth/:path*','/api/checkout/:path*']
}