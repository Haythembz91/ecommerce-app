'use client'
import CartItem from "@/componants/CartItem";
import {useCart} from "@/context/CartContext";

const CartItemsContainer = ()=>{
    const {items,clearCart} = useCart()
    console.log(items)
    return (
        <div className={'container-fluid'}>
            {items.map((item)=><CartItem key={item.id} item={item}/>)}
        </div>
    )
}

export default CartItemsContainer