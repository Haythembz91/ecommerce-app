'use client'
import Collections from '@/components/Collections'
import Category from '@/components/Category'
import Offcanvas from "@/components/Offcanvas";
import Link from "next/link";
import {useEffect, useState} from "react";
import SearchBar from "@/components/SearchBar";
import CartItemsContainer from "@/components/CartItemsContainer";
import {useCart} from "@/context/CartContext";
import UserBtn from "@/components/UserBtn";
import {useAuth} from "@/context/AuthContext";

const Header = ()=>{

    const [showSearchBar,setShowSearchBar] = useState<boolean>(false)
    const {items, show, toggleCart} = useCart()
    const {user} = useAuth()
    useEffect(()=>{
        const handleClick = (e:MouseEvent)=>{
            if(e.target === overlay){
                toggleCart()
            }
        }
        const overlay = document.getElementById('cartOverlay')
        window.addEventListener('click',handleClick)
        return ()=>window.removeEventListener('click',handleClick)
    },[show])


    return (
            <header className={"container-fluid sticky-top bg-body-secondary"}>
                <nav className={"navbar navbar-expand-md"}>
                    <div className={"col-5"}>
                        <button className="btn d-md-none" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                                 clipRule="evenodd">
                                <path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/>
                                <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/>
                            </svg>
                        </button>
                        <button className={"btn d-md-none"} onClick={()=>setShowSearchBar(prev=>!prev)} type="button">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                                 clipRule="evenodd">
                                <path
                                    d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/>
                            </svg>
                        </button>
                        <Offcanvas></Offcanvas>
                        <div>
                            <div className="d-none d-md-flex">
                                <div className={'categoryMenu'}>
                                    <Link href={"/"} role={'button'}
                                          className={'fw-bold btn btn-body-secondary btn-sm'}>
                                        SPORTSWEAR
                                    </Link>
                                    <Category></Category>
                                </div>
                                <div className={'collectionsMenu'}>
                                    <Link href="#" role={'button'}
                                          className={'fw-bold btn btn-body-secondary btn-sm '}>
                                        COLLECTIONS
                                    </Link>
                                    <Collections></Collections>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-2 d-flex justify-content-center"}>
                        <Link href={'/'} className={'navbar-brand'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M6 23.73l-3-2.122v-14.2l3 1.359v14.963zm2-14.855v15.125l13-1.954v-15.046l-13 1.875zm5.963-7.875c-2.097 0-3.958 2.005-3.962 4.266l-.001 1.683c0 .305.273.54.575.494.244-.037.425-.247.425-.494v-1.681c.003-1.71 1.416-3.268 2.963-3.268.537 0 1.016.195 1.384.564.422.423.654 1.035.653 1.727v1.747c0 .305.273.54.575.494.243-.037.423-.246.423-.492l.002-1.749c.002-1.904-1.32-3.291-3.037-3.291zm-6.39 5.995c.245-.037.427-.247.427-.495v-2.232c.002-1.71 1.416-3.268 2.963-3.268l.162.015c.366-.283.765-.513 1.188-.683-.405-.207-.858-.332-1.35-.332-2.096 0-3.958 2.005-3.962 4.266v2.235c0 .306.272.538.572.494z"/></svg>
                        </Link>
                    </div>
                    <div className={"d-flex justify-content-end col-5"}>
                        <div className={"d-flex"}>
                            <div className={'d-none d-md-flex col-md-3 justify-content-center pe-2'}>
                                <button className={"btn"} onClick={()=>setShowSearchBar(prev=>!prev)} type="button">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                                         clipRule="evenodd">
                                        <path
                                            d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="d-block col-md-3 justify-content-md-center align-content-center">
                                <div  className={'d-flex justify-content-center'}>
                                    {!user?<Link href={'/auth'}>
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                             fillRule="evenodd" clipRule="evenodd">
                                            <path
                                                d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z"/>
                                        </svg>
                                    </Link>:<UserBtn user={user}></UserBtn>}
                                </div>
                            </div>
                            <div className={'col-md-3 pt-1'}>
                                <button onClick={()=>toggleCart()} className="btn position-relative" type="button">
                                    <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-dark">
                                        {items.length>0&&items.reduce((total,item)=>total+Number(item.productQuantity),0)}
                                    </span>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                                         clipRule="evenodd">
                                        <path
                                            d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z"/>
                                    </svg>
                                </button>
                                {show&&<div className={'row'}>
                                    <div className={'d-flex flex-column overflow-y-scroll position-fixed p-0 col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4 top-0 end-0 h-100 bg-white'}>
                                        <div className="d-flex justify-content-between p-2 bg-body-secondary">
                                            <h4 className="mx-auto">Your Shopping Cart</h4>
                                            <button type="button" onClick={()=>toggleCart()} className="btn-close"></button>
                                        </div>
                                        <div className="p-1">
                                            <CartItemsContainer></CartItemsContainer>
                                        </div>
                                    </div>
                                    <div id={'cartOverlay'} className={'position-fixed d-none d-sm-block col-sm-3 col-md-5 col-lg-7 col-xl-8 h-100 start-0 top-0 bg-dark opacity-75'}>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </nav>
                {showSearchBar&&<SearchBar setShowSearchBar={setShowSearchBar}></SearchBar>}
            </header>
    )
}
export default Header