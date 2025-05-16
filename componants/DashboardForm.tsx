'use client'
import React, {useState} from "react";
import {categories, colors, legLengths, sizes, sleeveLengths} from "@/utils/enums";
import {categoriesList, colorsList, legLengthsList, sizesList, sleeveLengthsList} from "@/utils/const";

const DashboardForm =()=>{
    const [name,setName]=useState<string>('')
    const [description,setDescription]=useState<string>('')
    const [category,setCategory]=useState<categories>()
       const[size,setSize]=useState<sizes[]>([])
    const[color,setColor]=useState<colors[]>([])
    
    const [price,setPrice]=useState<number>(0)
const [sleeve,setSleeve]=useState<sleeveLengths>()
    const [legLength,setLegLength]=useState<legLengths>()

    
    const handleChangeSize = (event:React.FormEvent)=>
        {
            const { name, value, selectedOptions } = event.target as HTMLSelectElement;
            if (name === 'productCategory') {
              const values = Array.from(selectedOptions).map((option) => option.value);
              setSize(values);
            }
        }

    
    const handleColorChange=(e:React.FormEvent)=>{
        const { name, value, selectedOptions } = e.target as HTMLSelectElement;
        if (name === 'productColor') {
          const values = Array.from(selectedOptions).map((option) => option.value);
          setColor(values);
        }
    }

    const handleSubmit=(e:React.FormEvent)=>{
     e.preventDefault();
console.log("hello")
    }
    console.log('Ania the best')
    return (
        <form onSubmit={handleSubmit} className="m-2 p-2 w-50">
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
                    <select required value={category} onChange={(e)=>{            setCategory(e.target.value);
            if(![categories.UNITARDS,categories.T_SHIRTS_AND_TOPS].includes(category)){
              setSleeve(undefined)  
            }
                    }} className="form-control" id="productCategory"
                           aria-describedby="basic-addon3 basic-addon4">
                        <option value='' disabled selected>Select a Category...</option>                        {categoriesList.map((category,index)=>
            <option key={index} value={category}>
                {category}
            </option>
            )}
                    </select>
                </div>
            </div>
            {[categories.UNITARDS,categories.T_SHIRTS_AND_TOPS].includes(category)&& <div className="mb-3">
                <label htmlFor="sleeveLength" className="form-label">Sleeve Length: </label>
                <div className="input-group">
                    <select required value={sleeve} onChange={(e)=>setSleeve(e.target.value)} className="form-control" id="sleeveLength"
                           aria-describedby="basic-addon3 basic-addon4">
                        <option value='' disabled selected>Select Sleeve Length...</option>
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
                     <select required onChange={handleColorChange} multiple value={color} className="form-control" id="productColor" name={'productColor'}
                            aria-describedby="basic-addon3 basic-addon4">
                         <option value='' disabled selected>Select Available Colors</option>
                         {colorsList.map((color,index)=>
                                 <option key={index} value={color}>
                                     {color}</option>)}
                     </select>       
                 </div>
             </div>
            <div className="mb-3">
                <label htmlFor="productCategory" className="form-label">Available Sizes: </label>
                <div className="input-group">
                    <select required onChange={handleChangeSize} multiple value={size} className="form-control" id="productCategory" name={'productCategory'}
                           aria-describedby="basic-addon3 basic-addon4">
                        <option value='' disabled selected>Select Available Sizes</option>
                        {sizesList.map((size,index)=>
                                <option key={index} value={size}>
                                    {size}</option>)}                                </select>       
                </div>
            </div>
            {category===categories.LEGGINGS && <div className="mb-3">
                <label htmlFor="productColor" className="form-label">Leg Length: </label>
                <div className="input-group">
                    <select required onChange={e=>setLegLength(e.target.value)} value={legLength} className="form-control" id="legLength" name={'legLength'}
                           aria-describedby="basic-addon3 basic-addon4">
                        <option value='' disabled selected>Select Leg Length</option>
                        {legLengthsList.map((legLength,index)=>
                                <option key={index} value={legLength}>
                                    {legLength}</option>)}
                    </select>       
                </div>
            </div>}
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

export default DashboardForm