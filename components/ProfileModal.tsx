'use client'
import {useEffect, useState} from "react";

const ProfileModal = ()=>{

    const [show,setShow] = useState<boolean>(false)

    useEffect(()=>{
        const handleClick = (e:MouseEvent)=>{
            if(e.target === overlay){
                setShow(prev=>!prev)
            }else{
                if(e.target ===toggleModalBtn){
                    setShow(p=>!p)
                }
            }
        }
        const toggleModalBtn = document.getElementById('profileModalBtn')
        const overlay = document.getElementById('modalOverlay')
        window.addEventListener('click',handleClick)
        return ()=>window.removeEventListener('click',handleClick)
    },[show])

    return (
        <div>
            {show&&<div id={'modalOverlay'} className={'position-fixed d-flex justify-content-center align-items-center h-100 w-100 top-0 start-0 bg-dark opacity-75'}>
                <div className={'bg-white'}>Modal</div>
            </div>}
        </div>
    )
}

export default ProfileModal