'use client'
import {CartItem} from "@/utils/types";


const CartItem = ({item}:{item:CartItem})=>{

    return (
        <div>
            {item.productName}
        </div>
    )
}

export default CartItem