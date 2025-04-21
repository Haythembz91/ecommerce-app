

import leggingsBanner from '@/public/assets/banners/offcanvas/category/01.Navigation.WB_CategoryBanner_1000x349px_20240111_lg_05310faf-7791-4b44-ba9d-19e72f7598a8_500x.avif'
import sportsbraBanner from '@/public/assets/banners/offcanvas/category/05.Navigation.WB_CategoryBanner_1000x349px_20240111_lg_eee060c9-75f9-4c45-9a2e-2d07c1fc65ae_500x.avif'
import joggersBanner from '@/public/assets/banners/offcanvas/category/02.Navigation.WB_CategoryBanner_1000x349px_20240111_lg_67773c0c-cb51-441d-8c16-69d3751b0442_500x.webp'
import shortsBanner from '@/public/assets/banners/offcanvas/category/03.Navigation.WB_CategoryBanner_1000x349px_20240111_lg_34469b6a-3df1-4eac-b352-86a00517f8be_500x.avif'
import topsBanner from '@/public/assets/banners/offcanvas/category/04.Navigation.WB_CategoryBanner_1000x349px_20240111_lg_dd602626-72b0-49d4-8072-f205e88bc82d_500x.avif'
import hoodiesBanner from '@/public/assets/banners/offcanvas/category/06.Navigation.WB_CategoryBanner_1000x349px_20240111_lg_b6cb2138-0898-4e8f-b565-97ea8effa5df_500x.avif'
import accessoriesBanner from '@/public/assets/banners/offcanvas/category/07.Navigation.WB_CategoryBanner_1000x349px_20240111_lg_500x.avif'


const OffcanvasCategory = ()=>{

    const categories = [
        {
            banner:leggingsBanner.src,
            name:'LEGGINGS'
        },
        {
            banner:sportsbraBanner.src,
            name:'SPORTS BRAS'
        },
        {
            banner:joggersBanner.src,
            name:'JOGGERS'
        },
        {
            banner:shortsBanner.src,
            name:'SHORTS'
        },
        {
            banner:topsBanner.src,
            name:'T-SHIRTS & TOPS'
        },
        {
            banner:hoodiesBanner.src,
            name:'HOODIES'
        },
        {
            banner:accessoriesBanner.src,
            name:'ACCESSORIES'
        }

    ]
    return (
        <div id={'offcanvas-category'} className={'col-12'}>
            <a className={'d-flex link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'} href={'#offcanvas-sportswear'}>
                <p>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                         clipRule="evenodd">
                        <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/>
                    </svg>
                </p>
                <p className={'text-center w-100'}>Shop by Category</p>
            </a>
            {categories.map((col, index) => <div className={'position-relative p-1 d-flex align-items-center'}
                                                 key={index}>
                <a className={'h-100 align-content-center link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover position-absolute w-100 p-2'} href={'#'}>{col.name}</a>
                <img className={'img-fluid'} src={col.banner} alt={col.name}/>
            </div>)
            }
        </div>
    )
}

export default OffcanvasCategory