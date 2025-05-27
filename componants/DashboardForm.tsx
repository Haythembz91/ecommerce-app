'use client'
import React, {useState} from "react";
import {categories, colors, sizes} from "@/utils/enums";
import {categoriesList, colorsList, legLengthsList, sizesList, sleeveLengthsList,collectionsList} from "@/utils/const";


const DashboardForm =()=>{
    
    const [category,setCategory]=useState<categories>()
       const[size,setSize]=useState<sizes[]>([])
    const[color,setColor]=useState<colors[]>([])
    
const [msg,setMsg]=useState<string>('')
    const [loading,setLoading]=useState<boolean>(false)
    
    const handleChangeSize = (event:React.FormEvent)=>
        {
            const { name, value, selectedOptions } = event.target as HTMLSelectElement;
            if (name === 'productSizes') {
              const values = Array.from(selectedOptions).map((option) => option.value);
              setSize(values as sizes[]);
            }
        }

    
    const handleColorChange=(e:React.FormEvent)=>{
        const { name, value, selectedOptions } = e.target as HTMLSelectElement;
        if (name === 'productColor') {
          const values = Array.from(selectedOptions).map((option) => option.value);
          setColor(values as colors[]);
        }
    }

    const handleSubmit= async (e:React.FormEvent)=>{
        e.preventDefault()
        setLoading(true)
        setMsg('')
        try{
            const formData = new FormData(e.currentTarget as HTMLFormElement);
            const response = await fetch('/api/product', {
            method: 'POST',
            body: formData,
        })
            if(response.ok){
                const data = await response.json();
                setMsg(data.message)
            }
        }catch(e){
            console.error(e)
        }finally{
            setLoading(false)
        }
    
    }
    
    return (
        <div>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Add Product
          </button>
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Product</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit} className="m-2 p-2">
                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label">Product Name: </label>
                            <div className="input-group">
                                <input name={'productName'} required type="text" className="form-control" id="productName"
                                       aria-describedby="basic-addon3 basic-addon4"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productDescription" className="form-label">Product Description: </label>
                            <div className="input-group">
                                <textarea name={'productDescription'} required className="form-control" id="productDescription"
                                       aria-describedby="basic-addon3 basic-addon4"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productCategory" className="form-label">Product Category: </label>
                            <div className="input-group">
                                <select name={'productCategory'} required defaultValue={''} onChange={(e)=>{            setCategory(e.target.value as categories)
                                }} className="form-control" id="productCategory"
                                       aria-describedby="basic-addon3 basic-addon4">
                                    <option value={''} disabled>Select a Category...</option>                        {categoriesList.map((category,index)=>
                        <option key={index} value={category}>
                            {category}
                        </option>
                        )}
                                </select>
                            </div>
                        </div>
                        {[categories.UNITARDS,categories.T_SHIRTS_AND_TOPS].includes(category as categories)&& <div className="mb-3">
                            <label htmlFor="sleeveLength" className="form-label">Sleeve Length: </label>
                            <div className="input-group">
                                <select defaultValue={''} name={'sleeveLength'} required className="form-control" id="sleeveLength"
                                       aria-describedby="basic-addon3 basic-addon4">
                                    <option value='' disabled>Select Sleeve Length...</option>
                                    {sleeveLengthsList.map((sleeveLength,index)=>
                        <option key={index} value={sleeveLength}>
                            {sleeveLength}
                        </option>
                        )}
                                </select>
                            </div>
                        </div>}
                         <div className="mb-3">
                             <label htmlFor="productColor" className="form-label">Available Colors: </label>
                             <div className="input-group">
                                 <select required onChange={handleColorChange} multiple className="form-control" id="productColor" name={'productColor'}
                                        aria-describedby="basic-addon3 basic-addon4">
                                     <option defaultValue='' disabled>Select Available Colors</option>
                                     {colorsList.map((color,index)=>
                                             <option key={index} value={color}>
                                                 {color}</option>)}
                                 </select>       
                             </div>
                         </div>
                        <div className="mb-3">
                            <label htmlFor="productSizes" className="form-label">Available Sizes: </label>
                            <div className="input-group">
                                <select required onChange={handleChangeSize} multiple className="form-control" id={'productSizes'} name="productSizes"
                                       aria-describedby="basic-addon3 basic-addon4">
                                    <option defaultValue='' disabled>Select Available Sizes</option>
                                    {sizesList.map((size,index)=>
                                            <option key={index} value={size}>
                                                {size}</option>)}                                </select>       
                            </div>
                        </div>
                        {category===categories.LEGGINGS && <div className="mb-3">
                            <label htmlFor="legLength" className="form-label">Leg Length: </label>
                            <div className="input-group">
                                <select defaultValue={''} required className="form-control" id="legLength" name={'legLength'}
                                       aria-describedby="basic-addon3 basic-addon4">
                                    <option value='' disabled>Select Leg Length...</option>
                                    {legLengthsList.map((legLength,index)=>
                                            <option key={index} value={legLength}>
                                                {legLength}</option>)}
                                </select>       
                            </div>
                        </div>}
                        <div className="mb-3">
                            <label htmlFor="productCollection" className="form-label">Product Collection: </label>
                            <div className="input-group">
                                <select defaultValue={''} required className="form-control" id="productCollection" name={'productCollection'}
                                       aria-describedby="basic-addon3 basic-addon4">
                                    <option value='' disabled>Select Product Collection...</option>
                                    {collectionsList.map((collection,index)=>
                                            <option key={index} value={collection}>
                                                {collection}</option>)}                                </select>       
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productPrice" className="form-label">Product Price:</label>
                            <div className="input-group mb-3">
                              <span className="input-group-text" id="basic-addon1">$</span>
                              <input min={0} step={'any'} id={'productPrice'} name={'productPrice'} required type="number" className="form-control" placeholder="Price" aria-label="productPrice" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        {color.length>0&&size.length>0&&<div className="mb-3">
                            <div className="input-group mb-3"><table className={'table table-bordered table-striped'}><thead>
<tr>
    <th>Color</th>
    <th>Size</th>
    <th>Quantity</th>
</tr></thead><tbody>
                                {color.map((color)=>
    size.map((size)=>
        <tr key={`${color}-${size}`}>
            <td>{color}</td>
            <td>{size}</td>
            <td><input type="number" name={`${color}-${size}`} min={1} required className="form-control" placeholder="Quantity" aria-label="productQuantity" aria-describedby="basic-addon1"/></td></tr>
        )
    )}</tbody></table>
                            </div>
                        </div>}
                        {color.length>0&&<div className="mb-3">
                            <div className="input-group mb-3"><table className={'table table-bordered table-striped'}><thead>
<tr>
    <th>Color</th>
    <th>Images</th>
</tr></thead><tbody>
                                {color.map((color,index)=>
                        <tr key={`${color}-${index}`}>
                        <td>{color}</td>
                        <td>
                        <input type="file" name={`${color}`} required multiple accept={'image/*'} className="form-control"/>
                        </td></tr>
                        )
                        }</tbody></table>
                            </div>
                        </div>}
                         {msg&&<div className={'alert alert-success'}>{msg}</div>}
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>    
                            {loading?<button className="btn btn-primary" type="button" disabled>
                              <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                              <span role="status">Adding...</span>
                            </button>:<button className="btn btn-primary" type="submit">Add Product</button>}
                            
                        </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default DashboardForm
