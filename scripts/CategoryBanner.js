'use client'
import {useEffect} from "react";

const CategoryBanner = ()=>{
    useEffect(()=>{
        const ctgBtn = document.querySelector('.categoryMenu')
        const ctgMenu = document.querySelector('.ctgMenu')
        ctgBtn.addEventListener('mouseover',()=>{
            ctgMenu.classList.remove('visually-hidden')
            ctgBtn.addEventListener('mouseleave',()=>{
                ctgMenu.classList.add('visually-hidden')
            })
        })
    })
    return null
}

export default CategoryBanner