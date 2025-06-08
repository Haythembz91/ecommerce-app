'use client'

import {colors, sizes} from "@/utils/enums";
import {Product} from "@/utils/interfaces";
import Link from "next/link";
import React, {useState} from "react";

const AddToCartForm = ({product}:{product:Product}) => {
    const handleAddToCart = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        formData.append('productColor',product.primaryColor as colors)
        for(const [key,value] of formData.entries()){
            console.log(key,value)
        }
    }
    const [selectedSize,setSelectedSize]=useState<sizes>()
    return(
        <form onSubmit={handleAddToCart} className={'col-md-5 px-2'}>
            <h1><b>{product.productName}</b></h1>
            <h5><b>Color:</b> {product.primaryColor}</h5>
            <div>
                {product.productColor.map((color:colors,index:number)=>(
                    <Link href={`/products/sportswear/${product.productName}_${color}`} className={'mx-1 border border-dark border-opacity-75'} key={index} style={{backgroundColor:color,width:'25px',height:'25px',display:'inline-block',borderRadius:'50%'}}>
                    </Link>
                ))}
            </div>
            <div className={''}>
                <h5><b>Size:</b></h5>
                <div className={'d-flex justify-content-center'}>
                    {product.productSizes.map((size:sizes,index:number)=>(
                        <div key={index}>
                            <label style={selectedSize===size?{backgroundColor:'black',color:'white'}:undefined} className={'form-label btn btn-outline-dark rounded-0 m-1'} htmlFor={size}>{size}</label>
                            <input required={index===0} type={'radio'} id={size} onChange={e=>setSelectedSize(e.target.value as sizes)} value={size} name={'productSize'} className={'form-control visually-hidden'}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className={'d-flex justify-content-center'}>
                <button type={'submit'} className={'btn btn-dark rounded-5 my-2 w-75'}>Add to Cart</button>
            </div>
        </form>
    )
}

export default AddToCartForm