import newReleasesBanner from '@/public/assets/banners/category_banner/1.WB_Define2.0_NavigationBanner_20250218_lh_36e0850f-545c-4188-96fe-1ccce1aeef6d.webp'
import bestSellerBanner from '@/public/assets/banners/category_banner/1.WB_BestSellers_desktop_20250131_lm.webp'
import Image from 'next/image';
import CategoryBanner from "@/scripts/CategoryBanner";
import {categories, collections, colors} from "@/utils/enums";
import {categoriesList} from "@/utils/const";
import Link from "next/link";
const Category = ()=>{

    return(
        <div className={'ctgMenu pe-0 container-fluid visually-hidden position-absolute start-0 d-none d-md-flex justify-content-between bg-body-secondary'}>
            <div className={'row col-6'}>
                <p className={"pt-2 fw-bold"}>SHOP BY CATEGORY</p>
                <a href={`/shop/sportswear`} className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>All products</a>
                {categoriesList.map((category,index)=>
                    <Link key={index} href={`/shop/sportswear?productCategory=${encodeURIComponent(category)}`} className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>{category}</Link>
                    )}
                <Link href={`/shop/sportswear?primaryColor=${colors.BLACK}`} className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>All Black Items</Link>
                <Link href={`/shop/sportswear?primaryColor=${colors.BLUE}`} className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>All Blue Items</Link>
                <Link href={`/shop/sportswear?query=scrunch`} className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Scrunch</Link>
                <Link href={`/shop/sportswear?productCollection=${collections.POWER}`} className='col-3 link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Power Takeover</Link>
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