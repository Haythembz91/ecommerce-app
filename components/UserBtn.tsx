import {User} from "@/utils/interfaces";
import defaultAvatar from '@/public/assets/default.png'
import React from "react";
import {roles} from "@/utils/enums";

const UserBtn = ({user,setShowModal}:{user:User,setShowModal:React.Dispatch<React.SetStateAction<boolean>>})=>{
    return (
        <div className="btn-group">
            <button style={{width:'45px'}} type="button" className="p-2 btn btn-link dropdown-toggle" data-bs-toggle="dropdown"
                    data-bs-display="static" aria-expanded="false">
                <img className={'img-fluid rounded-circle'} src={user?.avatar?user.avatar:defaultAvatar.src} alt={'profile pic'}/>
            </button>
            <ul className="dropdown-menu dropdown-menu-end rounded-3">
                <li className="dropdown-item border-bottom d-flex">
                    <img alt={'profile pic'} style={{width:'45px'}} className={'img-fluid rounded-circle'} src={user?.avatar?user.avatar:defaultAvatar.src}/>
                    <p className={'ps-2 my-auto fw-bold'}>{user?.username}</p>
                </li>
                <li>
                    <button onClick={()=>setShowModal(true)} id={'profileModalBtn'} className="btn dropdown-item border-bottom">
                        Manage account
                    </button>
                </li>
                {user?.role===roles.ADMIN&&<li><a className="dropdown-item border-bottom" href="/admin">Dashboard</a></li>}
                <li>
                    <form action={''}>
                        <button type={'submit'} className="dropdown-item border-bottom">Sign Out</button>
                    </form>
                </li>
            </ul>
        </div>
    )
}

export default UserBtn