import {collections} from "@/utils/enums";

const OffcanvasCollection = ()=>{

    const arrCollections = [
        {
            banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749073537/1.Navigation.WB_CollectionBanner_500x478px_20241024_iw_500x_ee7pcq.webp',
            name:collections.DEFINE
        },
        {
            banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749073538/2.Navigation.WB_CollectionBanner_500x478px_20241024_iw_500x_pqy5o3.jpg',
            name:collections.MOTION
        },
        {
            banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749073539/3.Navigation.WB_CollectionBanner_500x478px_20241024_iw_500x_f8kagx.webp',
            name:collections.POWER
        },
        {
            banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749073539/4.Navigation.WB_CollectionBanner_500x478px_20241024_iw_500x_sagtxq.webp',
            name:collections.ESSENTIAL
        },
        {
            banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749073557/5.Navigation.WB_CollectionBanner_500x478px_20241024_iw_500x_ajqchf.jpg',
            name:collections.COMFORT
        },
        {
            banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749073558/1.Navigation.WB_CollectionBanner_SmoothContour500x478px_20241024_iw_300x_bxulgp.jpg',
            name:collections.SMOOTHCONTOUR
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
                {arrCollections.map((col, index) => <div
                    className={'p-1 col-6 position-relative d-flex align-items-center'} key={index}>
                    <a className={'fw-bold h-100 align-content-center link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover position-absolute w-100 text-center'}
                       href={`/shop/sportswear?productCollection=${col.name}`}>{col.name.toUpperCase()}</a>
                    <img className={'img-fluid'} src={col.banner} alt={col.name}/>
                </div>)
                }
            </div>
        </div>
    )
}

export default OffcanvasCollection