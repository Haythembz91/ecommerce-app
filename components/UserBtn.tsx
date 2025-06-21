import {User} from "@/utils/interfaces";
import defaultAvatar from '@/public/assets/default.png'

const UserBtn = ({user}:{user:User})=>{
    return (
        <div className="btn-group">
            <button style={{width:'45px'}} type="button" className="p-2 btn btn-link dropdown-toggle" data-bs-toggle="dropdown"
                    data-bs-display="static" aria-expanded="false">
                <img className={'img-fluid rounded-circle'} src={user?.avatar?user.avatar:defaultAvatar.src} alt={'profile pic'}/>
            </button>
            <ul className="dropdown-menu dropdown-menu-end rounded-3">
                <li className="dropdown-item border-bottom d-flex">
                    <img style={{width:'45px'}} className={'img-fluid rounded-circle'} src={user?.avatar?user.avatar:defaultAvatar.src}/>
                    <p className={'ps-2 my-auto fw-bold'}>{user?.username}</p>
                </li>
                <li id={'profileModalBtn'} className="btn dropdown-item border-bottom">
                    Manage account
                </li>
                <li><a className="dropdown-item border-bottom" href="#">Dashboard</a></li>
                <li><a className="dropdown-item border-bottom" href="#">Sign Out</a></li>
            </ul>
        </div>
    )
}

export default UserBtn