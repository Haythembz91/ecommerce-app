
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const protectedPaths = ['/api/checkout', '/admin'];

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Check if the route is protected
    const isProtected = protectedPaths.some(path => pathname.startsWith(path));
    if (!isProtected) return NextResponse.next();

    const token = req.cookies.get('token')?.value;

    if (!token) {
        if (pathname.startsWith('/api/')) {
            return new NextResponse(
                JSON.stringify({ error: 'Unauthorized' }),
                { status: 401, headers: { 'content-type': 'application/json' } }
            );
        } else {
            const loginUrl = new URL('/auth', req.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    try {
        await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
        return NextResponse.next();
    } catch (err) {
        if (pathname.startsWith('/api/')) {
            return new NextResponse(
                JSON.stringify({ error: 'Unauthorized' }),
                { status: 401, headers: { 'content-type': 'application/json' } }
            );
        } else {
            const loginUrl = new URL('/auth', req.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }
    }
}

export const config = {
    matcher: ['/admin/:path*','/user/:path*','/api/checkout'],
};
