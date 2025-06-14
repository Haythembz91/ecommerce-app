'use client'
import CartItem from "@/componants/CartItem";
import {useCart} from "@/context/CartContext";

const CartItemsContainer = ()=>{
    const {items,clearCart} = useCart()
    console.log(items)
    return (
        <div className={'container-fluid pt-3 ps-1 pe-3'}>
            {items.map((item)=><CartItem key={item.id} item={item}/>)}
            <h4 className={'fw-bold text-end'}>€{items.reduce((total, item) => total + Number(item.productPrice) * (Number(item.productQuantity) || 1), 0).toFixed(2)}</h4>
        </div>
    )
}

export default CartItemsContainer