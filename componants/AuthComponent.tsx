'use client'
import grd from '@/public/assets/google/web_light_sq_na.svg'
import React from "react";

const AuthComponent = ()=>{


    const [showLogin, setShowLogin] = React.useState(true)
    const [showRegister, setShowRegister] = React.useState(false)
    const handleLogin = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try{
            const response = await fetch ('/api/auth',{
                method:'POST',
                headers:{'x-requested-with':'XMLHttpRequest',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({})
            })
            if(response.ok){
                const data = await response.json();
                console.log(data)
            }
        }catch(e){
            console.error(e)
        }
    }

    return (
        <div className={'container'}>
            <ul className="nav nav-pills my-3 justify-content-center">
                <li className="nav-item px-2">
                    <button onClick={(e)=>{setShowLogin(true);setShowRegister(false)}} className="btn btn-outline-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" aria-current="page">Login</button>
                </li>
                <li className="nav-item px-2">
                    <button onClick={(e)=>{setShowLogin(false);setShowRegister(true)}} className="btn btn-outline-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Register</button>
                </li>
            </ul>
            <div className={'d-flex overflow-hidden'}>
                {showLogin&&<div className={'col-12'} id={'loginTab'}>
                    <form onSubmit={handleLogin}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control p-2" id="floatingInput" placeholder="Username"/>
                            <label className={'p-2'} htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control p-2" id="floatingPassword"
                                   placeholder="Password"/>
                            <label className={'p-2'} htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="checkChecked"/>
                            <label className="form-check-label" htmlFor="checkChecked">
                                Remember me
                            </label>
                        </div>
                        <div className={'mb-3'}>
                            <button type="submit" className="btn btn-dark w-100">Login</button>
                        </div>
                    </form>
                </div>}
                {showRegister&&<div className={'col-12'} id={'registerTab'}>
                    <form>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control p-2" id="floatingInput" placeholder="Username"/>
                            <label className={'p-2'} htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control p-2" id="floatingInput"
                                   placeholder="Email Address"/>
                            <label className={'p-2'} htmlFor="floatingInput">Email Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control p-2" id="floatingPassword"
                                   placeholder="Password"/>
                            <label className={'p-2'} htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control p-2" id="floatingPassword"
                                   placeholder="Confirm Password"/>
                            <label className={'p-2'} htmlFor="floatingPassword">Confirm Password</label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="checkChecked"/>
                            <label className="form-check-label" htmlFor="checkChecked">
                                Remember me
                            </label>
                        </div>
                        <div className={'mb-3'}>
                            <button type="submit" className="btn btn-dark w-100">Register</button>
                        </div>
                    </form>
                </div>}
            </div>
            <div className={'mb-3'}>
                <div className={'text-center'}>
                    Or Sign in with:
                </div>
                <div className={'d-flex justify-content-center mb-3'}>
                    <div className={'p-2'}>
                        <a href={'#'}>
                            <img style={{width:'45px'}} alt={'fb logo'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/500px-2023_Facebook_icon.svg.png'}/>
                        </a>
                    </div>
                    <div className={'d-flex align-items-center p-2'}>
                        <a href={'#'}>
                            <img src={grd.src} alt={'google icon'}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthComponent