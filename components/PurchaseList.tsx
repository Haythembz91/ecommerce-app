'use client'


import {useEffect, useState} from "react";

const PurchaseList = ()=>{

    const [purchases,setPurchases] = useState([])
    const getPurchases = async()=>{
        try{
            const response = await fetch ('/api/purchases');
            if (response.ok){
                const data = await response.json();
                setPurchases(data)
            }
        }catch(e){
            const error = e as Error
            console.error(error)
        }
    }
    useEffect(()=>{
        getPurchases()
    },[])
    console.log(purchases)

    return (
        <div>
        </div>
    )
}

export default PurchaseList