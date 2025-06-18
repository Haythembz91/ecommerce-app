import bannerWearSale
    from "@/public/assets/banners/offcanvas/Wear.WB_EasterSale_NavigationBanner_20250402_iw_mobile_500x.avif";
import bannerNrelease
    from "@/public/assets/banners/offcanvas/1.WB_DefineSpringEdit_NavigationBanner_20250408_lh_mobile_500x.avif";
import {categories} from "@/utils/enums";


const OffcanvasSportswear = ()=>{
    return (
        <div className={'col-12'} id={'offcanvas-sportswear'}>
            <div>
                <div className='position-relative pb-2'>
                    <a className='p-3 position-absolute h-100 align-content-center fw-bold link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover w-100'
                       href='#'>
                        UP TO 70% OFF
                    </a>
                    <img className={'img-fluid'} src={bannerWearSale.src} alt={'banner'}/>
                </div>
                <div className='position-relative pb-2'>
                    <a className='p-3 position-absolute h-100 align-content-center fw-bold link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover w-100'
                       href='#'>
                        NEW RELEASES
                    </a>
                    <img className={'img-fluid'} src={bannerNrelease.src} alt={'banner'}/>
                </div>
            </div>
            <ul className={'list-group list-group-flush'}>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'/shop/sportswear'}>Shop all Products</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#'}>Up to 70% OFF</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={`/shop/sportswear?query=scrunch`}>Scrunch</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#'}>Best Sellers</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={`/shop/sportswear?productCategory=${categories.LEGGINGS}`}>{categories.LEGGINGS}</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#offcanvas-category'}>Shop by Category</a></li>
                <li className={'list-group-item'}><a
                    className={"link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"}
                    href={'#offcanvas-collection'}>Shop by Collection</a></li>
            </ul>
        </div>
    )
}

export default OffcanvasSportswear