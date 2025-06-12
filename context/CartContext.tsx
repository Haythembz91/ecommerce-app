'use client'
import {createContext, useContext, useState} from "react";
import {CartContextType, CartItem} from "@/utils/types";

export const CartContext = createContext<CartContextType|undefined>(undefined)

export const CartProvider = ({children}:{children:React.ReactNode})=>{
    const [items, setItems] = useState<CartItem[]>([])

    const addItem = (item:CartItem)=>{
        setItems(prev=>[...prev,item])
        console.log('item added')
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