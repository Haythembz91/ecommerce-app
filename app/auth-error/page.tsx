import Link from "next/link";

export default async function AuthErrorPage({ searchParams }: { searchParams: Promise<{ reason: string }> }) {
    const params = await searchParams;
    const reason = params.reason;

    let message = "Authentication failed. Please try again.";
    if (reason === "duplicate") {
        message = "An account with that username or email already exists.";
    }

    return (
            <main className="p-4">
                <h1 className="h1 font-bold mb-2">Authentication Error</h1>
                <p className="">{message}</p>
                <Link href="/" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" >Login with different credentials</Link>
            </main>
    );
}
