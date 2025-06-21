'use client'

import {User} from "@/utils/interfaces";

const OffcanvasFooter = ({user}:{user:User}) => {

    return (
        <ul className="offcanvasFooter d-md-none list-unstyled p-3 text-decoration-underline">
            <li className="py-1 d-flex align-content-center">
                {!user?<a className="nav-link link-dark" href="/auth">
                    Login / Register
                </a>:<div>{user.username}</div>}
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
