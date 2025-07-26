'use client'
import {useEffect} from "react";

const Disclaimer = ()=>{
    useEffect(()=>{
        alert("Disclaimer: \n"+
            `This project is for educational use only. Product images were sourced from https://eu.womensbest.com website. \n`+
            "All trademarks and product rights belong to their respective owners.")
        },[])
    return null
}
export default Disclaimer