'use client'

import {useState, useEffect} from "react"; 
import {Product} from "@/utils/interfaces";
import ProductCard from "@/componants/ProductCard";
import {categoriesList} from "@/utils/const";
import {categories} from "@/utils/enums";

const ProductsContainer =({products}:{products:Product[]})=>{

  if(products.length===0)
    return <div className={'text-secondary px-5'}>Sorry - we can't find any product with this search filter.</div>
  
  
  const [filteredProducts, setFilteredProducts]=useState<Product[]>(products)
  const [selectedCategory, setSelectedCategory]=useState<categories|''>('')


    const categories:categories[] = []
    categoriesList.forEach((category)=>{
        if(products.filter((product)=>product.productCategory===category).length>0)
        categories.push(category as categories)
    })
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setSelectedCategory(event.target.value as categories) 
  }
    useEffect(()=>{
        if(selectedCategory==='') return setFilteredProducts(products)
        setFilteredProducts(products.filter((product)=>product.productCategory===selectedCategory))
        
    },[selectedCategory, products])
  
  return(
    <div>
      <div className={'w-100 overflow-x-scroll sportswearList mb-2'}>
          <ul className={'nav nav-underline gap-0 flex-nowrap list-group list-group-horizontal text-nowrap'}>
              <li className={'nav-item p-1 list-group-item d-flex justify-content-between align-items-center'}>
                  <label htmlFor={'all'} className={'nav-link p-1 link-secondary'}>ALL</label>
                  <input type={'radio'} name={'productCategory'}  id={'all'} value={''} onChange={e=>handleChange(e)} className={'d-none'} />
                  <span className="badge text-bg-secondary rounded-pill">{products.length}</span>
              </li>
              {categories.map((category,index)=>
     
        <li key={index} className={'nav-item p-1 list-group-item d-flex justify-content-between align-items-center '} >
          <label htmlFor={category} className={'nav-link p-1 link-secondary  '}>{category}</label>
          <input type={'radio'} name={'productCategory'}  id={category} value={category} onChange={e=>handleChange(e)} className={'d-none'} />
          <span className="badge text-bg-secondary rounded-pill">{products.filter((product)=>product.productCategory===category).length}</span>
      </li>
      )}
          </ul>
      </div>
    <div className={'row m-0 gx-2 row-cols-2 row-cols-md-4'}>
      {filteredProducts?.map((product:Product)=>{
          return(
              <ProductCard key={product._id} product={product}></ProductCard>
          )
      })}      
    </div>
    </div>
  )
}

export default ProductsContainer