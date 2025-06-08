'use client'

import {colors, sizes} from "@/utils/enums";
import {Product} from "@/utils/interfaces";
import Link from "next/link";
import React, {useState} from "react";

const AddToCartForm = ({product}:{product:Product}) => {
    const handleAddToCart = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        formData.append('productColor',product.primaryColor)
        for(const [key,value] of formData.entries()){
            console.log(key,value)
        }
    }
    const [selectedSize,setSelectedSize]=useState<sizes>()
    return(
        <form onSubmit={handleAddToCart} className={'col-md-5 px-2'}>
            <h1><b>{product.productName}</b></h1>
            <h4><b>Color:</b> {product.primaryColor}</h4>
            {product.productColor.map((color:colors,index:number)=>(
                <Link href={'#'} className={'mx-1'} key={index} style={{backgroundColor:color,width:'25px',height:'25px',display:'inline-block',borderRadius:'50%'}}>
                </Link>
            ))}
            <div className={'d-flex'}>
                {product.productSizes.map((size:sizes,index:number)=>(
                    <div key={index}>
                        <label style={selectedSize===size?{backgroundColor:'black',color:'white'}:undefined} className={'form-label btn btn-outline-dark rounded-0 m-1'} htmlFor={size}>{size}</label>
                        <input required={index===0} type={'radio'} id={size} onChange={e=>setSelectedSize(e.target.value as sizes)} value={size} name={'productSize'} className={'form-control visually-hidden'}/>
                    </div>
                ))}
            </div>
            <button type={'submit'} className={'btn btn-dark rounded-5 my-2 w-75'}>Add to Cart</button>
        </form>
    )
}

export default AddToCartForm