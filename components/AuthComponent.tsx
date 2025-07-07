'use client'
import grd from '@/public/assets/google/android_light_sq_ctn.svg'
import React from "react";
import {useRouter} from "next/navigation";
import {useAuth} from "@/context/AuthContext";
import getUser from "@/utils/GetUser";

const AuthComponent = ()=>{


    const [showLogin, setShowLogin] = React.useState(true)
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const router = useRouter()
    const {setUser} = useAuth()
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setIsLoading(true)
        if(!showLogin && password!==confirmPassword){
            setError('Passwords do not match')
            setIsLoading(false)
            return null
        }
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        try{
            const response = await fetch (`/api/auth/${showLogin?'login':'register'}`,{
                method:'POST',
                headers:{'x-requested-with':'XMLHttpRequest'
                },
                body:formData
            })
            if(!response.ok){
                const error = await response.json();
                console.error(error.message)
                setError(error.message)
            }else{
                const data = await getUser()
                setUser(data)
                setError('')
                router.push('/')
            }
        }catch(e){
            const error = e as Error
            console.error(error.message)
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <div className={'container px-md-4'}>
            <ul className="nav nav-pills my-3 justify-content-center">
                <li className="nav-item px-2">
                    <button onClick={()=>{setShowLogin(true);setError('')}} className="btn btn-outline-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" aria-current="page">Login</button>
                </li>
                <li className="nav-item px-2">
                    <button onClick={()=>{setShowLogin(false);setError('')}} className="btn btn-outline-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Sign Up</button>
                </li>
            </ul>
            <div className={'d-flex overflow-hidden'}>
                {showLogin&&<div className={'col-12 p-2'} id={'loginTab'}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input required type="text" name={'username'} className="form-control p-2" id="floatingInput" placeholder="Username"/>
                            <label className={'p-2'} htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required type="password" name={'password'} className="form-control p-2" id="floatingPassword"
                                   placeholder="Password"/>
                            <label className={'p-2'} htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" name={'rememberMe'} type="checkbox" value="rememberMe" id="checkChecked"/>
                            <label className="form-check-label" htmlFor="checkChecked">
                                Remember me
                            </label>
                        </div>
                        <div className={'mb-3'}>
                            {error}
                        </div>
                        {!isLoading?<div className={'mb-3'}>
                            <button type="submit" className="btn btn-dark w-100">Login</button>
                        </div>:
                            <button type="submit" className="btn btn-dark w-100" disabled>
                                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                <span role="status" className={'px-2'}>Logging in...</span>
                            </button>}
                    </form>
                </div>}
                {!showLogin&&<div className={'col-12 p-2'} id={'registerTab'}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input required type="text" name={'username'} className="form-control p-2" id="floatingUserInput" placeholder="Username"/>
                            <label className={'p-2'} htmlFor="floatingUserInput">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required type="email" name={'email_address'} className="form-control p-2" id="floatingEmailInput"
                                   placeholder="Email Address"/>
                            <label className={'p-2'} htmlFor="floatingEmailInput">Email Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required type="password" onChange={(e)=>setPassword(e.target.value)} name={'password'} className="form-control p-2" id="floatingPassword"
                                   placeholder="Password"/>
                            <label className={'p-2'} htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required type="password" onChange={e=>setConfirmPassword(e.target.value)} name={'confirmPassword'} className="form-control p-2" id="confirmFloatingPassword"
                                   placeholder="Confirm Password"/>
                            <label className={'p-2'} htmlFor="confirmFloatingPassword">Confirm Password</label>
                        </div>
                        <div className={'mb-3'}>{error}</div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" name={'rememberMe'} type="checkbox" value={'rememberMe'} id="checkChecked"/>
                            <label className="form-check-label" htmlFor="checkChecked">
                                Remember me
                            </label>
                        </div>
                        {!isLoading?<div className={'mb-3'}>
                                <button type="submit" className="btn btn-dark w-100">Sign Up</button>
                            </div>:
                            <button type="submit" className="btn btn-dark w-100" disabled>
                                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                <span role="status" className={'px-2'}>Signing up...</span>
                            </button>}
                    </form>
                </div>}
            </div>
            <div className={'mb-3'}>
                <div className={'text-center'}>
                    Or :
                </div>
                <div className={'d-flex justify-content-center mb-3'}>
                    <div className={'d-flex align-items-center p-2'}>
                        <button className={'google-login-btn'} onClick={()=>window.location.href='api/auth/google/login'}>
                            <img src={grd.src} alt={'google icon'}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthComponent