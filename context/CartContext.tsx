'use client'
import React, {createContext, useContext, useEffect, useState} from "react";
import {CartContextType, CartItemType} from "@/utils/types";

export const CartContext = createContext<CartContextType|undefined>(undefined)

export const CartProvider = ({children}:{children:React.ReactNode})=>{
    const [items, setItems] = useState<CartItemType[]>([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) {
            try {
                setItems(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse cart from localStorage');
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items));
    }, [items]);



    const addItem = (item:CartItemType)=>{

        setItems(prev=>{
            const existingItem = items.find(i=>i.productId===item.productId&&i.productSize===item.productSize)
            if(existingItem){
                return prev.map(i=>i.productId===item.productId&&i.productSize===item.productSize?{...i,productQuantity:Number(i.productQuantity)+Number(item.productQuantity)}:i)
            }
            return [...prev,item]
        })
    }

    const updateItemQuantity = (id:string,quantity:number)=>{
        setItems(prev=>prev.map(item=>item.id===id?{...item,productQuantity:quantity}:item))
    }
    const removeItem = (id:string)=>{
        setItems(items.filter(item=>item.id!==id))
    }
    const clearCart = ()=>{
        setItems([])
    }
    const toggleCart = ()=>setShow(prev=>!prev)
    return <CartContext.Provider value={{items,addItem,removeItem,updateItemQuantity,clearCart,show,toggleCart}}>{children}</CartContext.Provider>
}

export const useCart = ()=>{
    const context = useContext(CartContext)
    if(!context){
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}