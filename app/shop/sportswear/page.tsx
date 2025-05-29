import ProductCard from "@/componants/ProductCard";
import {Product} from "@/utils/interfaces";
import {GetProducts} from "@/utils/GetProducts";
import Link from "next/link";
import {categoriesList} from "@/utils/const";

const Home = async ({searchParams})=>{
    
    const filters = await searchParams
    const products:Product[] = await GetProducts(filters)
     
    return(
        <div>
            <div className={'w-100 overflow-x-scroll sportswearList'}>
                <ul className={'nav pppnav-underline gap-0 flex-nowrap list-group list-group-horizontal text-nowrap'}>
                    <li className={'nav-item p-1 list-group-item d-flex justify-content-between align-items-center'}>
                        <Link href={''} className={'nav-link p-1 link-secondary'}>ALL</Link>
                        <span className="badge text-bg-secondary rounded-pill">{products.length}</span>
                    </li>
                    {categoriesList.map((category,index)=>
            <li key={index} className={'nav-item p-1 list-group-item d-flex justify-content-between align-items-center '} >
                <label htmlFor={'productCategory'} className={'nav-link p-1 link-secondary  '}>{category}</label>
                <input type={'radio'} name={'productCategory'} id={'productCategory'} value={category} className={'d-none'} />
                <span className="badge text-bg-secondary rounded-pill">14</span>
            </li>
            )}
                </ul>
            </div>
        <div className={'row m-0 gx-2 row-cols-2 row-cols-md-4'}>
            {products.map((product:Product)=>{
                return(
                    <ProductCard key={product._id} product={product}></ProductCard>
                )
            })}      
        </div>
        </div>    
            
    )
}

export default Home