'use client'
import CartItem from "@/componants/CartItem";
import {useCart} from "@/context/CartContext";
import Link from "next/link";
import React from "react";
import {handleSubmit} from "@/utils/Checkout";

const CartItemsContainer = ()=>{
    const {items,clearCart} = useCart()
    console.log(items)

    if(items.length===0){
        return <div className={'p-4 h5 text-center'}>
            Your shopping cart is empty</div>
    }
    return (
        <div className={'container-fluid pt-3 ps-1 pe-3'}>
            {items.map((item)=><CartItem key={item.id} item={item}/>)}
            <div className={'d-flex justify-content-between'}>
                <h5>Total: ({items.reduce((total, item) => total + Number(item.productQuantity) || 1, 0)})</h5>
                <h4 className={'fw-bold text-end'}>€{items.reduce((total, item) => total + Number(item.productPrice) * (Number(item.productQuantity) || 1), 0).toFixed(2)}</h4>
            </div>
            <div className={'my-2 py-2'}>
                <div className={'mb-3 d-flex justify-content-center'}>
                    <form onSubmit={(e)=>handleSubmit(e,items)}>
                        <section>
                            <button className={'btn btn-dark rounded-pill'} type={'submit'} role={'link'}><span className={'px-3'}>Checkout</span></button>
                        </section>
                    </form>
                </div>
                <div className={'mb-3 d-flex justify-content-center'}>
                    <Link className={'btn btn-dark rounded-pill'} href={'/cart'}><span className={'px-3'}>Go to cart</span></Link>
                </div>
            </div>
        </div>
    )
}

export default CartItemsContainer