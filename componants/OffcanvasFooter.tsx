import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

const OffcanvasFooter = () => {

    return (
        <ul className="offcanvasFooter d-md-none list-unstyled p-3 text-decoration-underline">
            <li className="py-1">
                <SignedIn>
                    <UserButton />
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
