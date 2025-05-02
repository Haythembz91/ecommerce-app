'use client'
import {useEffect} from "react";

const CollectionBanner =()=>{
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
    return null
}

export default CollectionBanner