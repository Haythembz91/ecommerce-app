'use client'
import {useCart} from "@/context/CartContext";
import CartItem from "@/componants/CartItem";
import {handleSubmit} from "@/utils/Checkout";

const Home = ()=>{
    const {items} = useCart()
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
                <div className={'d-flex justify-content-center col-md-5 px-5 mb-3'}>
                    <form className={'w-100'} onSubmit={e=>handleSubmit(e,items)}>
                        <section>
                            <button className={'btn btn-dark rounded-pill w-100'} type={'submit'} role={'link'}><span className={'px-3'}>Checkout</span></button>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home