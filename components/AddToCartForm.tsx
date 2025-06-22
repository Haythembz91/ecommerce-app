'use client'

import {colors, legLengths, sizes, sleeveLengths} from "@/utils/enums";
import {Product} from "@/utils/interfaces";
import Link from "next/link";
import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {useCart} from "@/context/CartContext";
import {CartItemType} from "@/utils/types";

const AddToCartForm = ({product}:{product:Product}) => {

    const {addItem} = useCart()
    const handleAddToCart = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        formData.append('id',uuidv4() as string)
        formData.append('productId',product._id?.toString() as string)
        formData.append('productColor',product.primaryColor as colors)
        formData.append('productName',product.productName as string)
        formData.append('productImage',product.urlByColor![0] as string)
        formData.append('productPrice',product.productPrice as string)
        if (product.legLength) {
            formData.append('legLength', product.legLength as legLengths);
        }
        if (product.sleeveLength) {
            formData.append('sleeveLength', product.sleeveLength as sleeveLengths);
        }
        formData.append('stock',product.productQuantities[`${product.primaryColor}-${selectedSize}`].toFixed(2) as string)

        const item:CartItemType = Object.fromEntries(formData.entries()) as unknown as CartItemType
        addItem(item)
    }
    const [selectedSize,setSelectedSize]=useState<sizes>()
    const [selectedQuantity,setSelectedQuantity]=useState<number>(1)
    const totalPrice = parseFloat(product.productPrice)*(selectedQuantity||1)
    const {toggleCart} = useCart()
    return(
        <form onSubmit={handleAddToCart} className={'col-md-5 px-2'}>
            <h1 className={'mb-3'} ><b>{product.productName}</b></h1>
            <h5 className={'mb-3'}><b>Color:</b> {product.primaryColor}</h5>
            <div className={'mb-3'}>
                {product.productColor.map((color:colors,index:number)=>(
                    <Link href={`/products/sportswear/${product.productName}_${color}`} className={'mx-1 border border-dark border-opacity-75'} key={index} style={{backgroundColor:color,width:'25px',height:'25px',display:'inline-block',borderRadius:'50%'}}>
                    </Link>
                ))}
            </div>
            {product.legLength&&<h5 className={'mb-3'}>
                <b>Leg Length: </b>
                {product.legLength}
            </h5>}
            {product.sleeveLength&&<h5 className={'mb-3'}>
                <b>Sleeve Length: </b>
                {product.sleeveLength}
            </h5>}
            <div className={'mb-3'}>
                <h5><b>Size:</b></h5>
                <div className={'d-flex justify-content-center'}>
                    {product.productSizes.map((size:sizes,index:number)=>(
                        product.productQuantities[`${product.primaryColor}-${size}`]!==0&&<div key={index}>
                            <label style={selectedSize===size?{backgroundColor:'black',color:'white'}:undefined} className={'form-label btn btn-outline-dark rounded-0 m-1'} htmlFor={size}>{size}</label>
                            <input required={index===0} type={'radio'} id={size} onChange={e=>setSelectedSize(e.target.value as sizes)} value={size} name={'productSize'} className={'form-control visually-hidden'}/>
                        </div>
                    ))}
                </div>
            </div>
            {selectedSize&&<div className={'mb-3'}>
                <label htmlFor={'productQuantity'}>
                    <h5><b>Quantity:</b></h5>
                </label>
                <input required type={'number'} onChange={(e)=>setSelectedQuantity(parseInt(e.target.value))} min={1} max={product.productQuantities[`${product.primaryColor}-${selectedSize}`]} id={'productQuantity'} name={'productQuantity'} className={'form-control'}/>
            </div>}
            <div className={'mb-3'}>
                <h5><b>€{totalPrice}</b></h5>
            </div>
            <div className={'d-flex justify-content-center mb-3'}>
                <button type={'submit'} onClick={toggleCart} className={'btn btn-dark rounded-5 my-2 w-75'}>Add to Cart</button>
            </div>
            <div className={''}>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Product Description
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>{product.productDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddToCartForm