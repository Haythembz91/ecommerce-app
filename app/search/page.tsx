import ProductsContainer from "@/componants/ProductsContainer"
import {Product,SearchPageProps} from "@/utils/interfaces";
import {GetProducts} from "@/utils/GetProducts" 

const Search = async ({searchParams}:SearchPageProps)=>{
  const {query} = await searchParams
  const products:Product[] = await GetProducts({query:query?.trim()})
  
  return(
    <ProductsContainer products={products}/>
  )
}

export default Search