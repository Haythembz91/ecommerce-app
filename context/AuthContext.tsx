'use client'
import React, {createContext, useEffect} from "react";
import {User} from "@/utils/interfaces";
import GetUser from "@/utils/GetUser";


const AuthContext = createContext<{user:User|null,setUser:React.Dispatch<React.SetStateAction<User|null>>}>({user:null,setUser:()=>{}})


export const AuthContextProvider = ({children}:{children:React.ReactNode})=>{

    const [user,setUser] = React.useState<User|null>(null)

    useEffect(()=>{
        const getUser = async()=>{
            const u = await GetUser()
            setUser(u)
        }
        getUser().then().catch()
    },[])
    
    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )

}
export const useAuth = ()=>React.useContext(AuthContext)