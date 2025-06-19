import ProductsContainer from "@/componants/ProductsContainer"
import {Product} from "@/utils/interfaces";
import {GetProducts} from "@/utils/GetProducts" 

const Search = async ({searchParams}:{searchParams:Promise<{query:string}>})=>{
  const {query} = await searchParams
  const products:Product[] = await GetProducts({query:query?.trim()})
  
  return(
    <ProductsContainer products={products}/>
  )
}

export default Search