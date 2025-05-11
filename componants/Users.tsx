'use client'


import {useEffect, useState} from "react";

const Users = ()=>{
    const [users,setUsers]=useState([])
    const getUsers = async ()=>{
        try{
            const response = await fetch('/api/product')
            if (response.status===200){
                const data = await response.json()
                setUsers(data)
            }
        }catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        getUsers()
    },[])
    console.log(users)
    return (
        <div>
            Ania Kubow
        </div>
    )
}

export default Users