import bannerNutsale
    from "@/public/assets/banners/offcanvas/Nutrition.WB_EasterSale_NavigationBanner_20250402_iw_mobile_500x.avif";
import banner
    from "@/public/assets/banners/offcanvas/1.WB_CollagenPeptidesPlusCapsules_NavigationBanner_640x319px_20250114_dp_mobile_500x.avif";


const OffcanvasNutrition = ()=>{
    return (
        <div className={'col-12'} id={'offcanvas-nutrition'}>
            <div>
                <div className='position-relative pb-2'>
                    <a className='p-3 position-absolute h-100 align-content-center fw-bold link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover w-100'
                       href='#'>
                        UP TO 60% OFF
                    </a>
                    <img className={'img-fluid'} src={bannerNutsale.src} alt={'banner'}/>
                </div>
                <div className='position-relative pb-2'>
                    <a className='p-3 position-absolute h-100 align-content-center fw-bold link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover w-100'
                       href='#'>
                        NEW RELEASES
                    </a>
                    <img className={'img-fluid'} src={banner.src} alt={'banner'}/>
                </div>
            </div>
            <ul className={'list-group list-group-flush'}>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#'}>Shop all Products</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#'}>3 for 2 on chocolate treats</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#'}>Sports & Body-Shaping Supplements</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#'}>Collagen, Beauty & Sleep</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#'}>Proteins</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#'}>Capsule Supplements</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#'}>Vegan Essentials, Protein & Greens</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#'}>Vitamins & Health Supplements</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#'}>Functional Foods & Smart Protein Bars</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#'}>Bundles</a></li>
            </ul>
        </div>
    )
}

export default OffcanvasNutrition