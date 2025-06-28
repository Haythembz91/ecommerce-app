'use client'
import {useEffect, useState} from "react";
import {Purchase} from "@/utils/interfaces";
import React from 'react';
const PurchaseList = ()=>{

    const [purchases,setPurchases] = useState<Purchase[]>([])
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
        getPurchases().then().catch()
    },[])

    if(purchases.length===0){
        return null
    }

    return (
        <div className={''}>
            <h3 className={'fw-bold'}>Purchase History:</h3>
            <table className={'table table-hover table-bordered table-striped'}>
                <thead>
                <tr>
                    <th scope={'col'}>Product</th>
                    <th scope={'col'}>Quantity</th>
                    <th scope={'col'}>Amount</th>
                    <th scope={'col'}>Total Amount</th>
                </tr>
                </thead>
                <tbody className={'table-group-divider'}>
                {purchases.map((purchase,index)=>
                <React.Fragment key={index}>
                    <tr>
                        <th colSpan={4} className={'overflow-wrap'}>
                            <p className={'p-0 m-0'}>
                                Order Ref: {purchase._id} <br/>
                                Date: {new Date(purchase.createdAt).toLocaleString()}
                            </p>
                        </th>
                    </tr>
                    {purchase.items.map((item)=>
                        <React.Fragment key={item.id}>
                            <tr>
                                <td>
                                    <div className={'container d-flex flex-column flex-md-row p-2 w-100'} >
                                        <img style={{ maxHeight: '90px', maxWidth: '90px', objectFit: 'contain'}} className={''} src={item.image} alt={item.description} />
                                        <p className={'px-2'}>
                                            {item.description}
                                        </p>
                                    </div>
                                </td>
                                <td>{item.quantity}</td>
                                <td>€{item.price/100}</td>
                                <td>€{item.totalPrice/100}</td>
                            </tr>
                        </React.Fragment>)}
                    <tr>
                        <th colSpan={3}>Total Amount</th>
                        <td>€{purchase.amount_total/100}</td>
                    </tr>
                    <tr>
                        <th colSpan={3}>Receipt</th>
                        <td><a href={purchase.receipt_url} target={'_blank'}>View Receipt</a></td>
                    </tr>
                </React.Fragment>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default PurchaseList