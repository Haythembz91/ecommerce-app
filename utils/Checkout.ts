import {CartItemType} from "@/utils/types";
import React from "react";


export const handleSubmit = async (e:React.FormEvent<HTMLFormElement>,items:CartItemType[])=>{
    e.preventDefault()
    try{
        const response = await fetch('/api/checkout',{
            method:'POST',
            headers:{'x-requested-with':'XMLHttpRequest',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({items})
        })
        if(!response.ok){
            window.location.href = '/auth';
        }
        const data = await response.json();
        if (data.url) {
            window.location.href = data.url;
        } else {
            console.error('No checkout URL returned');
        }
    }catch(e){
        console.error(e)
    }
}

