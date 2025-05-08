import SignIn from "@/componants/SignIn";

const OffcanvasFooter = () => {
    
    return (
        <ul className="offcanvasFooter d-md-none list-unstyled p-3 text-decoration-underline">
            <li className="py-1">
                <SignIn></SignIn>
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
