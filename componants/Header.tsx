'use client'
import Image from "next/image";
import Collections from '@/componants/Collections'
import Category from '@/componants/Category'
import Nutrition from '@/componants/Nutrition'
import Offcanvas from "@/componants/Offcanvas";
import Link from "next/link";
import {useState} from "react";
import {routes} from '@/utils/enums'
import SearchBar from "@/componants/SearchBar";
import SignIn from "@/componants/SignIn";
import CartItemsContainer from "@/componants/CartItemsContainer";

const Header = ()=>{

    const [slug,setSlug] = useState<routes>(routes.HOME)
    const [showSearchBar,setShowSearchBar] = useState<boolean>(false)
    
    return (
            <header className={"container-fluid sticky-top bg-body-tertiary"}>
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
                        <Offcanvas setSlug={setSlug}></Offcanvas>
                        <div>
                            <div className="d-none d-md-flex">
                                <div className={'categoryMenu'}>
                                    <Link onClick={() => setSlug(routes.HOME)} href={"/"} role={'button'}
                                          className={'fw-bold btn btn-light btn-sm'}>
                                        SPORTSWEAR
                                    </Link>
                                    <Category></Category>
                                </div>
                                <div className={'collectionsMenu'}>
                                    <Link href="#" role={'button'} className={'fw-bold btn btn-light btn-sm'}>
                                        COLLECTIONS
                                    </Link>
                                    <Collections></Collections>
                                </div>
                                <div className={'nutritionMenu'}>
                                    <Link onClick={() => setSlug(routes.FITNESS)} href={"/fitness"} role={'button'}
                                          className={'fw-bold btn btn-light btn-sm'}>
                                        NUTRITION
                                    </Link>
                                    <Nutrition></Nutrition>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-2 d-flex justify-content-center"}>
                        <Link href={slug} className={'navbar-brand'}>
                            <Image src={"https://cdn.shopify.com/s/files/1/0744/0203/files/logo_icon_19.svg?603310"}
                                   alt={"Logo"} width={"48"} height={"38"}></Image>
                        </Link>
                    </div>
                    <div className={"d-flex justify-content-end col-5"}>
                        <div className={"d-flex"}>
                            <div className={'d-none d-md-flex col-md-3 justify-content-center'}>
                                <button className={"btn"} onClick={()=>setShowSearchBar(prev=>!prev)} type="button">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                                         clipRule="evenodd">
                                        <path
                                            d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/>
                                    </svg>
                                </button>
                            </div>
                            <div className={'d-flex col-md-3 justify-content-center'}>
                                <button className={"btn"}>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                                         clipRule="evenodd">
                                        <path
                                            d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="d-none d-md-block col-md-3 justify-content-md-center align-content-center">
                                <SignIn></SignIn>
                            </div>
                            <div className={'col-md-3'}>
                                <button className="btn" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                                         clipRule="evenodd">
                                        <path
                                            d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z"/>
                                    </svg>
                                </button>
                                <div className="offcanvas offcanvas-end d-md-none" tabIndex={-1} id="offcanvasRight"
                                     aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        <h4 className="offcanvas-title" id="offcanvasRightLabel">Your Shopping Cart</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body p-1">
                                        <CartItemsContainer></CartItemsContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {showSearchBar&&<SearchBar setShowSearchBar={setShowSearchBar}></SearchBar>}
            </header>
    )
}
export default Header