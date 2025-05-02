import defineBanner from '@/public/assets/banners/offcanvas/collections/1.Navigation.WB_CollectionBanner_500x478px_20241024_iw_500x.webp'
import motionBanner from '@/public/assets/banners/offcanvas/collections/2.Navigation.WB_CollectionBanner_500x478px_20241024_iw_500x.jpg'
import powerBanner from '@/public/assets/banners/offcanvas/collections/3.Navigation.WB_CollectionBanner_500x478px_20241024_iw_500x.webp'
import essentialBanner from '@/public/assets/banners/offcanvas/collections/4.Navigation.WB_CollectionBanner_500x478px_20241024_iw_500x.webp'
import accessoriesBanner from '@/public/assets/banners/offcanvas/collections/6.Navigation.WB_CollectionBanner_500x478px_20241024_iw_500x.webp'
import comfortBanner from "@/public/assets/banners/offcanvas/collections/5.Navigation.WB_CollectionBanner_500x478px_20241024_iw_500x.jpg"
const OffcanvasCollection = ()=>{

    const collections = [
        {
            banner:defineBanner.src,
            name:'DEFINE SCRUNCH'
        },
        {
            banner:motionBanner.src,
            name:'MOTION'
        },
        {
            banner:powerBanner.src,
            name:'POWER'
        },
        {
            banner:essentialBanner.src,
            name:'ESSENTIAL'
        },
        {
            banner:comfortBanner.src,
            name:'COMFORT'
        },
        {
            banner:accessoriesBanner.src,
            name:'ACCESSORIES'
        }

    ]
    return (
        <div id={'offcanvas-collection'} className={'col-12'}>
            <a className={'d-flex link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'}
               href={'#offcanvas-sportswear'}>
                <p>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                         clipRule="evenodd">
                        <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/>
                    </svg>
                </p>
                <p className={'text-center w-100'}>Shop by Collection</p>
            </a>
            <div className={'d-flex flex-wrap'}>
                {collections.map((col, index) => <div
                    className={'p-1 col-6 position-relative d-flex align-items-center'} key={index}>
                    <a className={'h-100 align-content-center link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover position-absolute w-100 text-center'}
                       href={'#'}>{col.name}</a>
                    <img className={'img-fluid'} src={col.banner} alt={col.name}/>
                </div>)
                }
            </div>
        </div>
    )
}

export default OffcanvasCollection