import ProductCard from "@/componants/ProductCard"; 
import {Product,SearchPageProps} from "@/utils/interfaces";
import {GetProducts} from "@/utils/GetProducts" 

const Search = async ({searchParams}:SearchPageProps)=>{
  const {query} = await searchParams
  const products:Product[] = await GetProducts({query:query?.trim()})
  
  return(
    <div className={'row m-0 gx-2 row-cols-2 row-cols-md-4'}>
        {products.map((product:Product)=>{
            return(
                <ProductCard key={product._id} product={product}></ProductCard>
            )
        })}      
    </div>
  )
}

export default Search