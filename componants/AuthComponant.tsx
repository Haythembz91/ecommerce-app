'use client'
import grd from '@/public/assets/google/web_light_sq_na.svg'
import React from "react";

const AuthComponant = ()=>{
    const [showLogin, setShowLogin] = React.useState(true)
    const [showRegister, setShowRegister] = React.useState(false)
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
                    <form>
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
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                <linearGradient id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1" x1="6.228" x2="42.077" y1="4.896" y2="43.432" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0d61a9"></stop><stop offset="1" stopColor="#16528c"></stop></linearGradient><path fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)" d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"></path><path d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z" opacity=".05"></path><path d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z" opacity=".07"></path><path fill="#fff" d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"></path>
                            </svg>
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

export default AuthComponant