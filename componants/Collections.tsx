'use client'
import collection_banner1 from "@/public/assets/banners/collection_banner/1.Navigation.WB_CollectionBanner_900x266px_20241018_iw.webp"
import collection_banner2 from "@/public/assets/banners/collection_banner/2.Navigation.WB_CollectionBanner_900x266px_20241018_iw.jpg"
import collection_banner3 from "@/public/assets/banners/collection_banner/3.Navigation.WB_CollectionBanner_900x266px_20241018_iw.webp"
import collection_banner4 from "@/public/assets/banners/collection_banner/4.Navigation.WB_CollectionBanner_900x266px_20241018_iw.webp"
import collection_banner5 from "@/public/assets/banners/collection_banner/5.Navigation.WB_CollectionBanner_900x266px_20241018_iw.jpg"
import collection_banner6 from "@/public/assets/banners/collection_banner/6.Navigation.WB_CollectionBanner_900x266px_20241018_iw.webp"
import {useEffect} from "react";


const Collections = ()=>{
    const collections = [
        {banner:collection_banner1,
        name:'Define Scrunch Collection'},
        {banner:collection_banner2,
        name:'Motion Collection'},
        {
            banner:collection_banner3,
            name:'Power Collection'
        },
        {banner:collection_banner4,
        name:'Essential Collection'},
        {banner:collection_banner5,
        name:'Comfort Collection'},
        {banner:collection_banner6,
            name:'Accessories'
        }
    ]


    useEffect(()=>{
        const cltBtn = document.querySelector('.collectionsMenu')
        const cltMenu = document.querySelector('.collectionsContainer')
        cltBtn.addEventListener('mouseover',()=>{
            cltMenu.classList.remove('visually-hidden')
            cltBtn.addEventListener('mouseleave',()=>{
                cltMenu.classList.add('visually-hidden')
            })
        })
    })

    return(
        <div className={`visually-hidden collectionsContainer position-absolute start-0 d-flex flex-wrap`}>
            {collections.map((col,index)=>
                <div key={index} className={'collectionBanners d-none d-md-block col-4 position-relative'}>
                    <a className={'w-100 h-100 align-content-center link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover position-absolute w-100 text-center'} href={'#'}>{col.name}</a>
                    <img className={'img-fluid'} src={col.banner.src} alt={col.name}/>
                </div>)}
        </div>
    )
}

export default Collections;