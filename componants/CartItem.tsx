'use client'
import {CartItem} from "@/utils/types";


const CartItem = ({item}:{item:CartItem})=>{

    return (
        <div className={'d-flex border-bottom pb-2 mb-2'}>
            <div className={'col-4'}>
                <img className={'img-fluid'} src={item.productImage} alt={'product image'}/>
            </div>
            <div className={'col-8'}>
                <p className={'mb-0 px-2'}>{item.productName}</p>
                <p className={'mb-0 px-2'}>€{item.productPrice}</p>
                <p className={'mb-0 px-2'}>Color: {item.productColor}</p>
                <p className={'mb-0 px-2'}>Size: {item.productSize}</p>
                <p className={'mb-0 px-2'}>Quantity: {item.productQuantity}</p>
            </div>
        </div>
    )
}

export default CartItem