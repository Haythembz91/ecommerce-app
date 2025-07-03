import {User} from "@/utils/interfaces";
import defaultAvatar from '@/public/assets/default.png'
import React from "react";
import {roles} from "@/utils/enums";
import {SignOut} from "@/scripts/SignOut";
import Link from "next/link";

const UserBtn = ({user,setShowModal}:{user:User,setShowModal:React.Dispatch<React.SetStateAction<boolean>>})=>{
    return (
        <div className="btn-group">
            <button style={{width:'45px',height:'45px'}} type="button" className="p-2 btn btn-link dropdown-toggle" data-bs-toggle="dropdown"
                    data-bs-display="static" aria-expanded="false">
                <img style={{width:'100%',height:'100%'}} className={'rounded-circle object-fit-cover'} src={user?.avatar?user.avatar:defaultAvatar.src} alt={'profile pic'}/>
            </button>
            <ul className="dropdown-menu dropdown-menu-end rounded-3">
                <li className="dropdown-item border-bottom d-flex">
                    <img alt={'profile pic'} style={{width:'45px',height:'45px',objectFit:'cover'}} className={'img-fluid rounded-circle my-auto'} src={user?.avatar?user.avatar:defaultAvatar.src}/>
                    <p className={'ps-2 my-auto fw-bold text-wrap'}>{user?.username}</p>
                </li>
                <li>
                    <button onClick={()=>setShowModal(true)} id={'profileModalBtn'} className="btn dropdown-item border-bottom">
                        Manage account
                    </button>
                </li>
                {user?.role===roles.ADMIN&&<li><Link className="dropdown-item border-bottom" href="/admin">Dashboard</Link></li>}
                <li>
                    <form action={SignOut}>
                        <button type={'submit'} className="dropdown-item border-bottom">Log Out</button>
                    </form>
                </li>
            </ul>
        </div>
    )
}

export default UserBtn