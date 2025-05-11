'use client'
import React, {useState} from "react";

const DashboardForm =()=>{
    const [name,setName]=useState<string>('')
    const handleSubmit =async (e:React.FormEvent)=>{
        e.preventDefault()
        try{

        }
        catch(e){
            console.error(e)
        }
    }
    return (
        <form onSubmit={(e)=>handleSubmit(e)} className="needs-validation m-2 p-2 w-50">
            <div className="mb-3">
                <label htmlFor="basic-url" className="form-label">Product Name: </label>
                <div className="input-group">
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="basic-url"
                           aria-describedby="basic-addon3 basic-addon4"/>
                </div>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    )
}

export default DashboardForm