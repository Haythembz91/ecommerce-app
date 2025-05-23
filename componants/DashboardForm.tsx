'use client'
import React, {useState} from "react";
import {categories, colors, legLengths, sizes, sleeveLengths,collections} from "@/utils/enums";
import {categoriesList, colorsList, legLengthsList, sizesList, sleeveLengthsList,collectionsList} from "@/utils/const";
import {Product, ImageFile, Quantities} from "@/utils/interfaces"

const DashboardForm =()=>{
    const [name,setName]=useState<string>('')
    const[color,setColor]=useState<colors[]>([])
    
const [msg,setMsg]=useState<string>('')
    const [loading,setLoading]=useState<boolean>(false)
    const [imageFiles,setImageFiles]=useState<ImageFile>({})

    
    const handleColorChange=(e:React.FormEvent)=>{
        const { name, value, selectedOptions } = e.target as HTMLSelectElement;
        if (name === 'productColor') {
          const values = Array.from(selectedOptions).map((option) => option.value);
          setColor(values as colors[]);
        }
    }

    const handleFileChange = (color: colors, files: FileList | null) => {
        if (files) {
          setImageFiles(prev => ({
            ...prev,
            [color]: Array.from(files)
          }));
        }
      };

    

    const handleSubmit= async (e:React.FormEvent)=>{
        e.preventDefault()
        setLoading(true)
        setMsg('')
const formData = new FormData();
        formData.append('name', name);
        formData.append('color',color);
formData.append('imageFiles',JSON.stringify(imageFiles))        
        

        
        try{
            const response = await fetch('/api/product', {
            method: 'POST',
            body: formData
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
                                <input required value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="productName"
                                       aria-describedby="basic-addon3 basic-addon4"/>
                            </div>
                        </div>                       
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
                        {color.length>0&&<div className="mb-3">
                            <div className="input-group mb-3">
                            <table className={'table table-bordered table-striped'}>
                                <thead>
                        <tr>                               <th>Color</th>
                        <th>Images</th>
                        </tr>                                    </thead>
                            <tbody>
                                {color.map((color)=>
                        <tr key={`${color}`}>
                        <td>{color}</td>
                        <td>
                        <input type="file" name={'imageFiles'} required multiple accept={'image/*'} className="form-control" onChange={(e)=>handleFileChange(color,e.target.files)}/>
                        </td></tr>
                        )
                        }                               </tbody>                                </table>
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