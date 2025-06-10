import {collections, routes} from "@/utils/enums";
import CollectionBanner from "@/scripts/CollectionBanner";
import Link from "next/link";
const Collections = ()=>{

    const arrCollections = [
        {banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749074872/1.Navigation.WB_CollectionBanner_900x266px_20241018_iw_iwnnzc.webp',
        name:collections.DEFINE
        },
        {banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749074886/2.Navigation.WB_CollectionBanner_900x266px_20241018_iw_gijxlc.jpg',
        name:collections.MOTION
        },
        {
            banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749074901/3.Navigation.WB_CollectionBanner_900x266px_20241018_iw_jq7f26.webp',
            name:collections.POWER
        },
        {banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749074902/4.Navigation.WB_CollectionBanner_900x266px_20241018_iw_nhnew2.webp',
        name:collections.ESSENTIAL
        },
        {banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749074903/5.Navigation.WB_CollectionBanner_900x266px_20241018_iw_vpmnvc.jpg',
        name:collections.COMFORT
        },
        {banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749074873/1.Navigation.WB_CollectionBanner_SmoothContour_900x266px_20250429_iw_oeii5y.webp',
            name:collections.SMOOTHCONTOUR
        }
    ]

    return(
        <div className={`visually-hidden collectionsContainer position-absolute start-0 d-flex flex-wrap`}>
            {arrCollections.map((col,index)=>
                <div key={index} className={'collectionBanners d-none d-md-block col-4 position-relative'}>
                    <Link className={'w-100 h-100 align-content-center link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover position-absolute w-100 text-center'} href={`/shop/${routes.SPORTSWEAR}?productCollection=${col.name}`}>{col.name}</Link>
                    <img className={'img-fluid'} src={col.banner} alt={col.name}/>
                </div>)}
            <CollectionBanner></CollectionBanner>
        </div>
    )
}

export default Collections;