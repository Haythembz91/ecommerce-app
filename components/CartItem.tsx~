'use client'
import {CartItemType} from "@/utils/types";
import {useCart} from "@/context/CartContext";
import Link from "next/link";


const CartItem = ({item}:{item:CartItemType})=>{

    const {removeItem,updateItemQuantity} = useCart()

    return (
        <div className={'d-flex border-bottom pe-2 pb-1 mb-2'}>
            <div className={'col-5'}>
                <a href={`/products/sportswear/${encodeURIComponent(item.productName)}_${item.productColor}`}>
                    <img className={'img-fluid'} src={item.productImage} alt={'product image'}/>
                </a>
            </div>
            <div className={'col-7'}>
                <p className={'mb-0 px-2'}>{item.productName}</p>
                <p className={'mb-0 px-2'}>€{Math.ceil(item.productPrice*(item.productQuantity||1)*100)/100}</p>
                <p className={'mb-0 px-2'}>Color: {item.productColor}</p>
                {item.legLength&&<p className={'mb-0 px-2'}>Leg Length: {item.legLength}</p>}
                {item.sleeveLength&&<p className={'mb-0 px-2'}>Sleeve Length: {item.sleeveLength}</p>}
                <p className={'mb-0 px-2'}>Size: {item.productSize}</p>
                <div className={'mb-3 p-2'}>
                    <div className={'d-inline-flex border rounded-pill'}>
                        <button type="button" className="btn" onClick={() => {
                            updateItemQuantity(item.id, item.productQuantity - 1)
                        }} disabled={item.productQuantity === 1}>-</button>
                        <p className={'my-auto px-2'}>{item.productQuantity}</p>
                        <button type="button" className="btn" onClick={() => {
                            updateItemQuantity(item.id, Number(item.productQuantity) + 1)
                        }} disabled={item.productQuantity===Number(item.stock)}>+</button>
                    </div>
                </div>
            </div>
            <button type="button" onClick={()=>removeItem(item.id)} className="btn-close p-2" aria-label="Close"></button>
        </div>
    )
}

export default CartItem