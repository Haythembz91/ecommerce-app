'use client'
import {sizesList, colorsList, collectionsList, legLengthsList, sleeveLengthsList,otherList,sortList,} from "@/utils/const"
import {useRouter, useSearchParams} from "next/navigation"
import {useState} from "react";

const SportswearHeader = () => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams);
    const [selectedFilters, setSelectedFilters]=useState(Object.fromEntries(params.entries()))
    
    const onChangeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
                params.set(event.target.name,event.target.value)
        setSelectedFilters(Object.fromEntries(params.entries()))
router.push(`?${params.toString()}`)
     
    }

    
       
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary flex-md-column">
            <div className="container-fluid align-content-center">
                <h4 className="navbar-brand">Sportswear</h4>
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
                    <div>
                        {Object.keys(selectedFilters).length>0? (<div><ul className={'list-unstyled d-flex flex-wrap'}>{
                            Object.values(selectedFilters).map((value:any,index)=><li className={'list-item'} key={index}>
                            <button onClick={()=>{
                                params.delete(Object.keys(selectedFilters)[index])
                                setSelectedFilters(Object.fromEntries(params.entries()))
                                router.push(`?${params.toString()}`)
                            }} className={'btn btn-outline-secondary me-2'}>
                                {value}
                            </button>
                            </li>
                        )}</ul>
                                                                 <button onClick={()=>{router.push('/shop/sportswear')
                                                                                        setSelectedFilters({})
                                                                                      }} className={'btn btn-outline-secondary'}>Clear All</button>
                        </div>
                                                                ):null}
                    
                    </div>
                    <ul className="navbar-nav text-nowrap">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                SIZE
                            </a>
                            <ul className="dropdown-menu">                                {sizesList.map((size,index)=>
            <li key={index} className="form-check px-2">
                <input className={'me-2'} type="radio" name="productSizes" onChange={onChangeHandler}
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
                <input className={'me-2'} type="radio" onChange={(e)=>onChangeHandler(e)} name="primaryColor"
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
                                {collectionsList.map((collection,index)=>
            <li key={index} className="form-check px-2">
                <input className={'me-2'} type="radio" name="productCollection"
                       id={collection} onChange={(e)=>onChangeHandler(e)} value={collection}/>
                <label className={'px-1'} htmlFor={collection}>
                    {collection}
                </label>
            </li> 
            )}
                            </ul>
                        </li>      
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                LEG LENGTH
                            </a>
                            <ul className="dropdown-menu">
                                {legLengthsList.map((legLength,index)=>
            <li key={index} className="form-check px-2">
                <input className={'me-2'} type="radio" name="legLength" onChange={(e)=>onChangeHandler(e)}
                       id={legLength} value={legLength}/>
                <label className={'px-1'} htmlFor={legLength}>
                    {legLength}
                </label>
            </li> 
            )}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                SLEEVE LENGTH
                            </a>
                            <ul className="dropdown-menu">
                                {sleeveLengthsList.map((sleeveLength,index)=>
            <li key={index} className="form-check px-2">
                <input className={'me-2'} type="radio" name="sleeveLength" onChange={(e)=>onChangeHandler(e)}
                       id={sleeveLength} value={sleeveLength}/>
                <label className={'px-1'} htmlFor={sleeveLength}>
                    {sleeveLength}
                </label>
            </li>
            )}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                OTHER
                            </a>
                            <ul className="dropdown-menu">
                                {otherList.map((other,index)=>
            <li key={index} className="form-check px-2">
                <input className={'me-2'} type="radio" name="other" onChange={(e)=>onChangeHandler(e)}
                       id={other} value={other}/>
                <label className={'px-1'} htmlFor={other}>
                    {other}
                </label>
            </li>
            
            )}
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
                                {sortList.map((sort,index)=>
            
            <li key={index} className="form-check px-2">
                <input className={'me-2'} type="radio" name="sort" onChange={(e)=>onChangeHandler(e)}
                       id={sort} value={sort}/>
                <label className={'px-1'} htmlFor={sort}>
                    {sort}
                </label>
            </li>
            )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>    
        </nav>
    )
}
export default SportswearHeader