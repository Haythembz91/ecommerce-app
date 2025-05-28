import SignIn from "@/componants/SignIn";
import { useUser } from "@clerk/nextjs";
const OffcanvasFooter = () => {
    const user = useUser();
    
    return (
        <ul className="offcanvasFooter d-md-none list-unstyled p-3 text-decoration-underline">
            <li className="py-1 d-flex align-content-center">
                <SignIn></SignIn>
                {user.user&&<p className="px-2 m-0">Hi {user.user?.username}</p>}
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
