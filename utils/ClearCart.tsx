'use client'
import {useCart} from "@/context/CartContext";
import {useEffect} from "react";


const ClearCart = ()=>{
    const {clearCart} = useCart()
    useEffect(()=>{
        clearCart()
        localStorage.removeItem('cart')
    },[])
    return null
}
export default ClearCart