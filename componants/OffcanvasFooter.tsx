import {SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";

const OffcanvasFooter = () => {
    const user = useUser();
    return (
        <ul className="offcanvasFooter d-md-none list-unstyled p-3 text-decoration-underline">
            <li className="py-1">
                <SignedIn>
                    <div className={'d-flex'}>
                        <UserButton />
                        <p className={'my-auto mx-2'}>Hi {user.user?.username}!</p>
                    </div>
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <a className={"nav-link link-dark"} role="button">
                            Log In/Sign Up
                        </a>
                    </SignInButton>
                </SignedOut>
            </li>
            <li className="py-1">
                <a className="nav-link link-dark" href="#">
                    Blog
                </a>
            </li>
            <li className="py-1">
                <a className="nav-link link-dark" href="#">
                    Contact us
                </a>
            </li>
        </ul>
    );
};

export default OffcanvasFooter;
