import Link from "next/link";
import {sizes, colors, collections, legLengths, sleeveLengths} from "@/utils/enums"
import {sizesList, colorsList, collectionsList, legLengthsList, sleeveLengthsList} from "@/utils/const"
const SportswearHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary flex-md-column">
            <div className="container-fluid align-content-center">
                <a className="navbar-brand" href="#">Filter</a>
                <button className="navbar-toggler mb-2 fs-6" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                         clipRule="evenodd">
                        <path
                            d="M23 0l-9 14.146v7.73l-3.996 2.124v-9.853l-9.004-14.147h22zm-20.249 1l8.253 12.853v8.491l1.996-1.071v-7.419l8.229-12.854h-18.478z"/>
                    </svg>
                    Filters
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav text-nowrap">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                SIZE
                            </a>
                            <ul className="dropdown-menu">                                {sizesList.map((size,index)=>
            <li key={index} className="form-check px-2">
                <input className={'me-2'} type="radio" name="size"
                       id={size} value={size}/>
                <label htmlFor="sizeXs">
                    {size}
                </label>
            </li> 
            )}            
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                COLOR
                            </a>
                            <ul className="dropdown-menu">
                                {colorsList.map((color,index)=>
            
            <li key={index} className="form-check px-2">
                <input className={'me-2'} type="radio" name="color"
                       id={color} value={color}/>
                <label className={''} htmlFor={color}>
                    {color}
                </label>
            </li>
            )}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                COLLECTION
                            </a>
                            <ul className="dropdown-menu">
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="collection"
                                           id={collections.MOTION} value={collections.MOTION}/>
                                    <label className={'px-1'} htmlFor={collections.MOTION}>
                                        {collections.MOTION}
                                    </label>
                                </li>
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="collection"
                                           id="define" value={'Define'}/>
                                    <label className={'px-1'} htmlFor="define">
                                        Define
                                    </label>
                                </li>
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="collection"
                                           id="power" value="Power"/>
                                    <label className={'px-1'} htmlFor="power">
                                        Power
                                    </label>
                                </li>
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="collection"
                                           id="essential" value={'Essential'}/>
                                    <label className={'px-1'} htmlFor="essential">
                                        Essential
                                    </label>
                                </li>
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="collection"
                                           id="comfort" value={'Comfort'}/>
                                    <label className={'px-1'} htmlFor="comfort">
                                        Comfort
                                    </label>
                                </li>
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="collection"
                                           id="accessories" value={'Accessories'}/>
                                    <label className={'px-1'} htmlFor="accessories">
                                        Accessories
                                    </label>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                LEG LENGTH
                            </a>
                            <ul className="dropdown-menu">
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="legLength"
                                           id="7/8Length" value={'7/8 Length'}/>
                                    <label className={'px-1'} htmlFor="7/8Length">
                                        7/8 Length
                                    </label>
                                </li>
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="legLength"
                                           id="regularLength" value={'Regular Length'}/>
                                    <label className={'px-1'} htmlFor="regularLength">
                                        Regular Length
                                    </label>
                                </li>
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="legLength"
                                           id="longLength" value={'Long Length'}/>
                                    <label className={'px-1'} htmlFor="longLength">
                                        Long Length
                                    </label>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                SLEEVE LENGTH
                            </a>
                            <ul className="dropdown-menu">
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="sleeveLength"
                                           id="shortSleeve" value={'Short Sleeve'}/>
                                    <label className={'px-1'} htmlFor="shortSleeve">
                                        Short Sleeve
                                    </label>
                                </li>
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="sleeveLength"
                                           id="longSleeve" value={'Long Sleeve'}/>
                                    <label className={'px-1'} htmlFor="longSleeve">
                                        Long Sleeve
                                    </label>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                OTHER
                            </a>
                            <ul className="dropdown-menu">
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="other"
                                           id="bestSellers" value={'Best Sellers'}/>
                                    <label className={'px-1'} htmlFor="bestSellers">
                                        Best Sellers
                                    </label>
                                </li>
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="other"
                                           id="newReleases" value={'New Releases'}/>
                                    <label className={'px-1'} htmlFor="newReleases">
                                        New Releases
                                    </label>
                                </li>
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="other"
                                           id="springEdit" value={'Spring Edit'}/>
                                    <label className={'px-1'} htmlFor="springEdit">
                                        Spring Edit
                                    </label>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                PRICE
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                SORT BY
                            </a>
                            <ul className="dropdown-menu">
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="sort"
                                           id="newest" value={'Newest'}/>
                                    <label className={'px-1'} htmlFor="newest">
                                        Newest
                                    </label>
                                </li>
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="sort"
                                           id="priceDsc" value={'Price: High to Low'}/>
                                    <label className={'px-1'} htmlFor="priceDsc">
                                        Price: High to Low
                                    </label>
                                </li>
                                <li className="form-check px-2">
                                    <input className={'me-2'} type="radio" name="sort"
                                           id="priceAsc" value={'Price: Low to High'}/>
                                    <label className={'px-1'} htmlFor="priceAsc">
                                        Price: Low to High
                                    </label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={'w-100 overflow-x-scroll sportswearList'}>
                <ul className={'nav nav-underline gap-0 flex-nowrap list-group list-group-horizontal text-nowrap'}>
                    <li className={'nav-item p-1 list-group-item d-flex justify-content-between align-items-center'}>
                        <Link href={''} className={'nav-link p-1 link-secondary'}>ALL</Link>
                        <span className="badge text-bg-secondary rounded-pill">14</span>
                    </li>
                    <li className={'nav-item p-1 list-group-item d-flex justify-content-between align-items-center '} >
                        <Link href={''} className={'nav-link p-1 link-secondary'}>Leggings</Link>
                        <span className="badge text-bg-secondary rounded-pill">14</span>
                    </li>
                    <li className={'nav-item p-1 list-group-item d-flex justify-content-between align-items-center '} >
                        <Link href={''} className={'nav-link p-1 link-secondary'}>Joggers</Link>
                        <span className="badge text-bg-secondary rounded-pill">14</span>
                    </li>
                    <li className={'nav-item p-1 list-group-item d-flex justify-content-between align-items-center '} >
                        <Link href={''} className={'nav-link p-1 link-secondary'}>Sports Bras</Link>
                        <span className="badge text-bg-secondary rounded-pill">14</span>
                    </li>
                    <li className={'nav-item p-1 list-group-item d-flex justify-content-between align-items-center '} >
                        <Link href={''} className={'nav-link p-1 link-secondary'}>Shorts</Link>
                        <span className="badge text-bg-secondary rounded-pill">14</span>
                    </li>
                    <li className={'nav-item p-1 list-group-item d-flex justify-content-between align-items-center '} >
                        <Link href={''} className={'nav-link p-1 link-secondary'}>T-Shirts & Tops</Link>
                        <span className="badge text-bg-secondary rounded-pill">14</span>
                    </li>
                    <li className={'nav-item p-1 list-group-item d-flex justify-content-between align-items-center'} >
                        <Link href={''} className={'nav-link p-1 link-secondary'}>Hoodies, Sweatshirts & Jackets</Link>
                        <span className="badge text-bg-secondary rounded-pill">14</span>
                    </li>
                    <li className={'nav-item p-1 list-group-item d-flex justify-content-between align-items-center'} >
                        <Link href={''} className={'nav-link p-1 link-secondary'}>Unitards</Link>
                        <span className="badge text-bg-secondary rounded-pill">14</span>
                    </li>
                    <li className={'nav-item p-1 list-group-item d-flex justify-content-between align-items-center '} >
                        <Link href={''} className={'nav-link p-1 link-secondary'}>Accessories</Link>
                        <span className="badge text-bg-secondary rounded-pill">14</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default SportswearHeader