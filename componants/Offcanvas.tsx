'use client'

import OffcanvasSportswear from "@/componants/OffcanvasSportswear";
import OffcanvasNutrition from "@/componants/OffcanvasNutrition";
import OffcanvasCollection from "@/componants/OffcanvasCollection";
import OffcanvasCategory from "@/componants/OffcanvasCategory";
import OffcanvasFooter from "./OffcanvasFooter";

const Offcanvas = ({setSlug})=>{

    return (
        <div className="sportswearList offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample"
             aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <ul className="nav nav-underline">
                    <li className="nav-item">
                        <a onClick={()=>setSlug('/')} className="nav-link link-dark" aria-current="true" href="#offcanvas-sportswear">Sportswear</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={()=>setSlug('/fitness')} className="nav-link link-dark" href="#offcanvas-nutrition">Nutrition</a>
                    </li>
                </ul>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                        aria-label="Close">
                </button>
            </div>
            <div className="offcanvas-body d-md-none">
                <div className={'d-flex overflow-x-hidden'}>
                    <OffcanvasSportswear/>
                    <OffcanvasNutrition/>
                    <OffcanvasCollection/>
                    <OffcanvasCategory/>
                </div>
            </div>
            <OffcanvasFooter></OffcanvasFooter>
        </div>
    )
}

export default Offcanvas