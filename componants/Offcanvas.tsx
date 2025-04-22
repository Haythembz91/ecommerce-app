'use client'

import OffcanvasSportswear from "@/componants/OffcanvasSportswear";
import OffcanvasNutrition from "@/componants/OffcanvasNutrition";
import OffcanvasCollection from "@/componants/OffcanvasCollection";
import OffcanvasCategory from "@/componants/OffcanvasCategory";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

const Offcanvas = ()=>{

    return (
        <div className="sportswearList offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
             aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <ul className="nav nav-underline">
                    <li className="nav-item">
                        <a className="nav-link link-dark" aria-current="true" href="#offcanvas-sportswear">Sportswear</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-dark" href="#offcanvas-nutrition">Nutrition</a>
                    </li>
                </ul>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                        aria-label="Close">
                </button>
            </div>
            <div className="offcanvas-body d-md-none">
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <button className={"btn"}>
                            Log In/Sign Up
                        </button>
                    </SignInButton>
                </SignedOut>
                <div className={'d-flex overflow-x-hidden'}>
                    <OffcanvasSportswear/>
                    <OffcanvasNutrition/>
                    <OffcanvasCollection/>
                    <OffcanvasCategory/>
                </div>
            </div>
        </div>
    )
}

export default Offcanvas