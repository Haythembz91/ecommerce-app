import OffcanvasSportswear from "@/components/OffcanvasSportswear";
import OffcanvasCollection from "@/components/OffcanvasCollection";
import OffcanvasCategory from "@/components/OffcanvasCategory";
import OffcanvasFooter from "./OffcanvasFooter";
const Offcanvas = ()=>{

    return (
        <div className="sportswearList offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample"
             aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header bg-body-secondary">
                <h4>Sportswear</h4>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                        aria-label="Close">
                </button>
            </div>
            <div className="offcanvas-body d-md-none">
                <div className={'d-flex overflow-x-hidden'}>
                    <OffcanvasSportswear/>
                    <OffcanvasCollection/>
                    <OffcanvasCategory/>
                </div>
            </div>
            <OffcanvasFooter></OffcanvasFooter>
        </div>
    )
}

export default Offcanvas