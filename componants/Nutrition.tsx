import newReleasesBanner from '@/public/assets/banners/nutrition_banner/1.WB_CollagenPeptidesPlusCapsules_NavigationBanner_640x319px_20250114_dp_desktop.webp'
import bundleBanner from '@/public/assets/banners/nutrition_banner/Nutrition_Bundles_10e4f1d9-fd16-4abd-aaa7-fb64a7c421c7.webp'
import Image from 'next/image';
import NutritionBanner from "@/scripts/NutritionBanner";

const Category = ()=>{
    return(
        <div className={'nutMenu pt-1 container-fluid visually-hidden position-absolute start-0 d-none d-md-flex justify-content-between bg-body-tertiary'}>
            <div className={'row col-5'}>
                <p className='fw-bold'>SHOP BY CATEGORY</p>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Shop All Products</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Vegan Essentials, Protein & Greens</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Sports & Body-Shaping Supplements</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Vitamins & Health Supplements</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Collagen, Beauty & Sleep</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Functional Foods & Smart Protein Bars</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Proteins</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Capsule Supplements</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Accessories & Shakers</a>
            </div>
            <div className={'row col-5'}>
                <p className='col-12 fw-bold'>BEST SELLERS</p>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Shop All Best Sellers</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Vegan Protein</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Collagen Peptides Plus+</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Apple Vinegar Cider Gummies</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>BCAA-Amino</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Pre Workout Booster</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Burner Capsules</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Fit Pro Whey Protein</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Shape Body Shake</a>
                <a href='#' className={'col-6 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark'}>Super Greens & Superfoods</a>
            </div>
            <div className={'col-2'}>
                <div className='d-flex align-items-center position-relative'>
                    <a className='w-100 h-100 align-content-center fw-bold link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover position-absolute w-100 text-center' href='#'>New Releases</a>
                    <Image width={640} height={319} className='h-50 w-100 object-fit-cover border-bottom' src={newReleasesBanner.src} alt={'best seller banner'}/>
                </div>
                <div className='d-flex align-items-center position-relative'>
                    <a className='w-100 h-100 align-content-center fw-bold link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover position-absolute w-100 text-center' href='#'>Bundles</a>
                    <Image width={640} height={319} className='h-50 w-100 object-fit-cover border-top' src={bundleBanner.src} alt={'new release banner'}/>
                </div>
            </div>
            <NutritionBanner></NutritionBanner>
        </div>
    )
}

export default Category