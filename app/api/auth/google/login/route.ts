import { NextResponse } from "next/server";

export async function GET() {
    const redirectUri = process.env.NODE_ENV === "development" ? `${process.env.BASE_URL}/api/auth/google/callback` : `${process.env.PUBLIC_URL}/api/auth/google/callback`;
    const clientId = process.env.GOOGLE_CLIENT_ID!;
    const scope = encodeURIComponent("openid email profile");

    const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&prompt=select_account`;

    return NextResponse.redirect(url);
}
