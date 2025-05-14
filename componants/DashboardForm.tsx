'use client'
import React, {useState} from "react";
import {categories, colors, legLengths, sizes, sleeveLengths} from "@/utils/enums";

const DashboardForm =()=>{
    const [name,setName]=useState<string>('')
    const [description,setDescription]=useState<string>('')
    const [category,setCategory]=useState<string>('')
       const[size,setSize]=useState<string[]>([])
    const[color,setColor]=useState<string[]>([])
    
    const [price,setPrice]=useState<number>(0)
const [sleeve,setSleeve]=useState<string>('')
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
    return (
        <form className="m-2 p-2 w-50">
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
              setSleeve('')  
            }
                    }} className="form-control" id="productCategory"
                           aria-describedby="basic-addon3 basic-addon4">
                        <option value='' disabled selected>Select a Category...</option>
                        <option value={categories.LEGGINGS}>
                        Leggings
                        </option>
                        <option value={categories.JOGGERS}>
                            Joggers
                            </option>
                        <option value={categories.SPORTS_BRAS}>
                            Sports Bras
                            </option>
                        <option value={categories.SHORTS}>
                            Shorts
                            </option>
                        <option value={categories.T_SHIRTS_AND_TOPS}>
                            T-Shirts & Tops
                            </option>
                        <option value='hoodies'>
                            Hoodies, Sweatshirts & Jackets
                            </option>
                        <option value={categories.UNITARDS}>
                            Unitards
                            </option>
                        <option value='accessories'>
                            Accessories
                            </option>
                    </select>
                </div>
            </div>
            {[categories.UNITARDS,categories.T_SHIRTS_AND_TOPS].includes(category)&& <div className="mb-3">
                <label htmlFor="sleeveLength" className="form-label">Sleeve Length: </label>
                <div className="input-group">
                    <select required value={sleeve} onChange={(e)=>setSleeve(e.target.value)} className="form-control" id="sleeveLength"
                           aria-describedby="basic-addon3 basic-addon4">
                        <option value='' disabled selected>Select Sleeve Length...</option>
                        <option value='shortSleeve'>
                        Short Sleeve
                        </option>
                        <option value='longSleeve'>
                            Long Sleeve
                            
                        </option>
                    </select>
                </div>
            </div>}
            <div className="mb-3">
                <label htmlFor="productCategory" className="form-label">Available Sizes: </label>
                <div className="input-group">
                    <select required onChange={handleChangeSize} multiple value={size} className="form-control" id="productCategory" name={'productCategory'}
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
                <label htmlFor="productColor" className="form-label">Available Colors: </label>
                <div className="input-group">
                    <select required onChange={handleColorChange} multiple value={color} className="form-control" id="productColor" name={'productColor'}
                           aria-describedby="basic-addon3 basic-addon4">
                        <option value='' disabled selected>Select Available Colors</option>
                        <option value='black'>
                        Black
                        </option>
                        <option value='red'>
                            Red
                            </option>
                        <option value='yellow'>
                            Yellow
                            </option>
                        <option value={'green'}>
                            Green
                            </option>
                        <option value='pink'>
                            Pink
                            </option>
                        <option value='white'>
                            White
                            </option>
                        <option value='grey'>
                            Grey
                            </option>
                        <option value='blue'>
                            Blue
                            </option>
                    </select>       
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
            <div>{sleeve}+{category}</div>
        </form>
    )
}

export default DashboardForm