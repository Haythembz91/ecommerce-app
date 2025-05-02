'use client'
import {useEffect} from "react";

const NutritionBanner = ()=>{
    useEffect(()=>{
        const nutBtn = document.querySelector('.nutritionMenu')
        const nutMenu = document.querySelector('.nutMenu')
        nutBtn.addEventListener('mouseover',()=>{
            nutMenu.classList.remove('visually-hidden')
            nutBtn.addEventListener('mouseleave',()=>{
                nutMenu.classList.add('visually-hidden')
            })
        })
    })
    return null
}

export default NutritionBanner