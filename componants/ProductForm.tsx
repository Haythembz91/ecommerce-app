'use client'
import React, {useState} from "react";

const ProductForm =()=>{
    const [name,setName]=useState<string>('')
    const [description,setDescription]=useState<string>('')
    const [category,setCategory]=useState<string>('')
    const[size,setSize]=useState<string[]>([])
    const [price,setPrice]=useState<number>(0)
    

    return (
        <form className="needs-validation m-2 p-2 w-50">
            <div className="mb-3">
                <label htmlFor="productName" className="form-label">Product Name: </label>
                <div className="input-group">
                    <input required value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="productName"
                           aria-describedby="basic-addon3 basic-addon4"/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="productDescription" className="form-label">Product Description: </label>
                <div className="input-group">
                    <textarea required value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" id="productDescription"
                           aria-describedby="basic-addon3 basic-addon4"/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="productCategory" className="form-label">Product Category: </label>
                <div className="input-group">
                    <select required value={category} onChange={(e)=>setCategory(e.target.value)} className="form-control" id="productCategory"
                           aria-describedby="basic-addon3 basic-addon4">
                        <option value='' disabled selected>Select a Category...</option>
                        <option value='leggings'>
                        Leggings
                        </option>
                        <option value='joggers'>
                            Joggers
                            </option>
                        <option value='sportsBras'>
                            Sports Bras
                            </option>
                        <option value='shorts'>
                            Shorts
                            </option>
                        <option value='tshirts_tops'>
                            T-Shirts & Tops
                            </option>
                        <option value='hoodies'>
                            Hoodies, Sweatshirts & Jackets
                            </option>
                        <option value='unitards'>
                            Unitards
                            </option>
                        <option value='accessories'>
                            Accessories
                            </option>
                    </select>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="productCategory" className="form-label">Product Category: </label>
                <div className="input-group">
                    <select required multiple value={size} className="form-control" id="productCategory" name={'productCategory'}
                           aria-describedby="basic-addon3 basic-addon4">
                        <option value='' disabled selected>Select Available Sizes</option>
                        <option value='sizeXs'>
                        XS
                        </option>
                        <option value='sizeS'>
                            S
                            </option>
                        <option value='sizeM'>
                            M
                            </option>
                        <option value={'sizeL'}>
                            L
                            </option>
                        <option value='sizeXl'>
                            XL
                            </option>
                        <option value='sizeXxl'>
                            XXL
                            </option>           </select>       
                </div>
            </div>
            <div className="mb-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">$</span>
                  <input required type="number" value={price} onChange={(e)=>setPrice(parseInt(e.target.value))} className="form-control" placeholder="Price" aria-label="productPrice" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    )
}

export default ProductForm