import newReleasesBanner from '@/public/assets/banners/category_banner/1.WB_Define2.0_NavigationBanner_20250218_lh_36e0850f-545c-4188-96fe-1ccce1aeef6d.webp'
import bestSellerBanner from '@/public/assets/banners/category_banner/1.WB_BestSellers_desktop_20250131_lm.webp'
import Image from 'next/image';
import CategoryBanner from "@/scripts/CategoryBanner";
const Category = ()=>{

    return(
        <div className={'ctgMenu container-fluid visually-hidden position-absolute start-0 d-none d-md-flex justify-content-between bg-body-tertiary'}>
            <div className={'row col-6'}>
                <p className={"pt-2 fw-bold"}>SHOP BY CATEGORY</p>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>All products</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Leggings</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>New Releases</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Best Sellers</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Joggers</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Shorts</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>All Black Items</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Loungewear</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>T-Shirts & Tops</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Sports Bras</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>All Blue Items</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Scrunch</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Hoodies,Sweatshirts & Jackets</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Accessories</a>
                <a href='#' className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Outlet</a>
            </div>
            <div className='col-3 d-flex align-content-center position-relative'>
                <a className='w-100 h-100 align-content-center fw-bold link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover position-absolute w-100 text-center' href='#'>New Releases</a>
                <Image height={349} width={1000} className='h-100 w-100 object-fit-cover border-end'  src={newReleasesBanner.src} alt={'new release banner'}/>
            </div>
            <div className='col-3 d-flex align-items-center position-relative'>
                <a className='w-100 h-100 align-content-center fw-bold link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover position-absolute w-100 text-center' href='#'>Best Sellers</a>
                <Image height={640} width={1000} className='h-100 w-100 object-fit-cover border-start'  src={bestSellerBanner.src} alt={'best seller banner'}/>
            </div>
            <CategoryBanner/>
        </div>
    )
}

export default Category