'use client'
import React, {createContext, useContext, useState} from "react";
import {CartContextType, CartItemType} from "@/utils/types";

export const CartContext = createContext<CartContextType|undefined>(undefined)

export const CartProvider = ({children}:{children:React.ReactNode})=>{
    const [items, setItems] = useState<CartItemType[]>([])

    const addItem = (item:CartItemType)=>{

        setItems(prev=>{
            const existingItem = items.find(i=>i.productId===item.productId&&i.productSize===item.productSize)
            if(existingItem){
                return prev.map(i=>i.productId===item.productId&&i.productSize===item.productSize?{...i,productQuantity:Number(i.productQuantity)+Number(item.productQuantity)}:i)
            }
            return [...prev,item]
        })
    }
    const removeItem = (id:string)=>{
        setItems(items.filter(item=>item.id!==id))
    }
    const clearCart = ()=>{
        setItems([])
    }
    return <CartContext.Provider value={{items,addItem,removeItem,clearCart}}>{children}</CartContext.Provider>
}

export const useCart = ()=>{
    const context = useContext(CartContext)
    if(!context){
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}