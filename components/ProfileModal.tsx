import React from "react";
import {User} from "@/utils/interfaces";
import defaultAvatar from "@/public/assets/default.png";

const ProfileModal = ({user,setShowModal}:{user:User,setShowModal:React.Dispatch<React.SetStateAction<boolean>>})=>{

    return (
        <div>
            <div className={''}>
                <div onClick={()=>setShowModal(false)} id={'modalOverlay'} className={'position-fixed d-flex justify-content-center align-items-center h-100 w-100 top-0 start-0 bg-dark opacity-75'}>
                </div>
                <div className={'bg-white h-75 position-fixed container p-0 rounded-4 overflow-hidden top-50 start-50 translate-middle'}>
                    <div className={'container-fluid h-100 p-0 d-flex flex-row'}>
                        <div className={'d-none d-md-block col-4 p-3 bg-secondary bg-gradient'}>
                            <h4 className={'fw-bold'}>Account</h4>
                            <p>
                                Manage your account info.
                            </p>
                        </div>
                        <div className={'col-md-8 p-3 h-100'}>
                            <header className={'nav navbar d-flex'}>
                                <span>
                                    <h5 className={'fw-bold my-auto'}>Profile details</h5>
                                </span>
                                <button onClick={()=>setShowModal(false)} className={'btn-close'}></button>
                            </header>
                            <div className="modal-body">
                                <div className={'mb-3 d-flex justify-content-around align-items-center border-top'}>
                                    <div className={'p-2'}>Profile</div>
                                    <div className={'p-2'}>
                                        <img style={{width:'50px'}} src={user?.avatar?user.avatar:defaultAvatar.src} className={'img-fluid rounded-circle'} alt={'Profile'}></img>
                                    </div>
                                    <div className={'p-2'}>
                                        <input type={'file'} accept={'image/*'} className={'form-control'}></input>
                                    </div>
                                </div>
                                <div className={'mb-3 d-flex justify-content-around align-items-center border-top'}>
                                    <div className={'p-2'}>Username</div>
                                    <div className={'p-2'}>
                                        <input type={'text'} defaultValue={user?.username} className={'form-control'}/>
                                    </div>
                                    <div className={'p-2'}>
                                        <button className={'btn btn-outline-dark'}>Save</button>
                                    </div>
                                </div>
                                <div className={'mb-3'}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileModal