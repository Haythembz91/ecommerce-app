'use client'
import React from "react";
import {User} from "@/utils/interfaces";
import defaultAvatar from "@/public/assets/default.png";
import PurchaseList from "@/components/PurchaseList";

const ProfileModal = ({user,setShowModal}:{user:User,setShowModal:React.Dispatch<React.SetStateAction<boolean>>})=>{

        const [isLoading,setIsLoading] = React.useState(false)
        const [isDeleting,setIsDeleting] = React.useState(false)
        const handleUpdate=async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
            setIsLoading(true)
        try{
            const formData = new FormData(e.currentTarget as HTMLFormElement);
            console.log(Object.fromEntries(formData.entries()))
            const response = await fetch('/api/auth/user/update', {
                method: 'PUT',
                headers:{'x-requested-with':'XMLHttpRequest'
                },
                body:formData
            })
            if(response.ok){
                window.location.reload()
            }
        }catch(e){
            const error = e as Error
            console.error(error)
        }finally {
            setIsLoading(false)
        }
    }

    const handleDelete = async (e:React.MouseEvent)=>{
        e.preventDefault()
        setIsDeleting(true)
        try{
            const response = await fetch('/api/auth/user/delete', {
                method: 'DELETE',
                headers:{'x-requested-with':'XMLHttpRequest'
            }
            })
            if(response.ok){
                window.location.reload()
            }
        }catch(e){
            const error = e as Error
            console.error(error.message)
        }finally {
            setIsDeleting(false)
        }
    }

    return (
        <div>
            <div className={''}>
                <div onClick={()=>setShowModal(false)} id={'modalOverlay'} className={'position-fixed d-flex justify-content-center align-items-center h-100 w-100 top-0 start-0 bg-dark opacity-75'}>
                </div>
                <div className={'bg-white h-75 position-fixed container p-0 rounded-4 overflow-hidden top-50 start-50 translate-middle'}>
                    <div className={'container-fluid h-100 p-0 d-flex flex-row'}>
                        <div className={'d-none d-md-block col-3 p-2 bg-secondary bg-gradient'}>
                            <h4 className={'fw-bold'}>Account</h4>
                            <p>
                                Manage your account info.
                            </p>
                        </div>
                        <div className={'col-12 col-md-9 p-2 h-100 overflow-y-scroll'}>
                            <header className={'nav navbar'}>
                                <span>
                                    <h5 className={'fw-bold my-auto'}>Profile details</h5>
                                </span>
                                <button onClick={()=>setShowModal(false)} className={'btn-close'}></button>
                            </header>
                            <form onSubmit={handleUpdate} className="modal-body p-2">
                                <div className={'mb-3 row row-cols-2 row-cols-md-3 border-top'}>
                                    <div className={'col mx-auto p-2'}>Profile</div>
                                    <div style={{height:'60px',width:'60px'}} className={'col mx-auto p-2'}>
                                        <label htmlFor={`${user.username}_avatar`}>
                                            <img style={{width:'100%',height:'100%',objectFit:'cover'}} src={user?.avatar?user.avatar:defaultAvatar.src} className={'img-fluid rounded-circle profileImage'} alt={'Profile'}></img>
                                        </label>
                                        </div>
                                    <div className={'col mx-auto p-2'}>
                                        <input required name={`${user.username}_avatar`} id={`${user.username}_avatar`} type={'file'} accept={'image/*'} className={'form-control d-none'}></input>
                                    </div>
                                </div>
                                <div className={'mb-3 row row-cols-2 row-cols-md-3 border-top'}>
                                    <div className={'col mx-auto p-2'}>Username</div>
                                    <div className={'col mx-auto p-2'}>
                                        <input disabled={true} name={'username'} type={'text'} defaultValue={user?.username} className={'form-control'}/>
                                    </div>
                                    <div className={'col mx-auto p-2'}>
                                        {!isLoading?<button type={'submit'} className={'btn btn-dark w-100'}>Save</button>:
                                            <button className="btn btn-dark w-100" type="button" disabled>
                                                <span className="spinner-border spinner-border-sm"
                                                      aria-hidden="true"></span>
                                                <span className={'px-2'} role="status">Saving...</span>
                                            </button>}
                                    </div>
                                </div>
                            </form>
                            <div className={'my-3 p-2'}>
                                <PurchaseList></PurchaseList>
                            </div>
                            <div className={'my-3 p-2 d-flex justify-content-end'}>
                                {!isDeleting?<button onClick={handleDelete} className={'btn btn-danger'}>Delete Account</button>:
                                    <button className="btn btn-danger" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm"
                                    aria-hidden="true"></span>
                                    <span className={'px-2'} role="status">Deleting...</span>
                        </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileModal