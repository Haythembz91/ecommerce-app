'use client'
import {useEffect, useState} from "react";
import {Purchase} from "@/utils/interfaces";
import React from 'react';
import PurchaseContainer from "@/components/PurchaseContainer";
const PurchaseList = ()=>{

    const [purchases,setPurchases] = useState<Purchase[]|null>(null)
    const getPurchases = async()=>{
        try{
            const response = await fetch ('/api/purchases',{
                method:'GET',
                headers:{'x-requested-with':'XMLHttpRequest'}
            });
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
        getPurchases().then().catch()
    },[])

    if(!purchases){
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    if(purchases.length===0){
        return <div>You have no purchases yet</div>
    }

    return (
        <PurchaseContainer purchases={purchases}></PurchaseContainer>
    )
}

export default PurchaseList