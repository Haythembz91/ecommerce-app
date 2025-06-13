'use client'
import {CartItemType} from "@/utils/types";
import {useState} from "react";
import {useCart} from "@/context/CartContext";


const CartItem = ({item}:{item:CartItemType})=>{

    const [quantity, setQuantity] = useState<number>(item.productQuantity)
    const {removeItem} = useCart()

    return (
        <div className={'d-flex border-bottom p-2 mb-2'}>
            <div className={'col-4'}>
                <img className={'img-fluid'} src={item.productImage} alt={'product image'}/>
            </div>
            <div className={'col-8'}>
                <p className={'mb-0 px-2'}>{item.productName}</p>
                <p className={'mb-0 px-2'}>€{item.productPrice*(quantity||1)}</p>
                <p className={'mb-0 px-2'}>Color: {item.productColor}</p>
                {item.legLength&&<p className={'mb-0 px-2'}>Leg Length: {item.legLength}</p>}
                {item.sleeveLength&&<p className={'mb-0 px-2'}>Sleeve Length: {item.sleeveLength}</p>}
                <p className={'mb-0 px-2'}>Size: {item.productSize}</p>
                <div className={'mb-0 px-2'}>
                    <label htmlFor={'productQuantity'}>Quantity: </label>
                    <input required type={'number'} id={'productQuantity'}
                           onChange={(e)=>setQuantity(parseInt(e.target.value))}
                           className={'rounded-pill mx-3 px-2'} name={'productQuantity'} min={1} max={item.stock}
                           defaultValue={item.productQuantity}/>
                </div>
            </div>
            <button type="button" onClick={()=>removeItem(item.id)} className="btn-close p-2" aria-label="Close"></button>
        </div>
    )
}

export default CartItem