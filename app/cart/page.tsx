'use client'
import {useCart} from "@/context/CartContext";
import CartItem from "@/componants/CartItem";

const Home = ()=>{
    const {items,clearCart} = useCart()
    if(items.length===0){
        return <div className={'p-4 h5 text-center'}>
            Your shopping cart is empty</div>
    }
    return (
        <div className={'pe-2'}>
            <h3 className={'text-center p-2'}>Your Shopping Cart</h3>
            <div className={'d-md-flex'}>
                <div className={'container-fluid col-md-7'}>
                    {items.map((item,index)=><CartItem key={index} item={item}/>)}
                </div>
                <div className={'d-flex flex-column col-md-5 px-5 mb-3'}>
                    <button className={'btn btn-dark rounded-pill'}><span className={'px-3'}>Proceed to checkout</span></button>
                </div>
            </div>
        </div>
    )
}

export default Home