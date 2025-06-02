import {Product} from "@/utils/interfaces";
import {GetProducts} from "@/utils/GetProducts";
import ProductsContainer from "@/componants/ProductsContainer"

const Home = async ({searchParams})=>{
    
    const filters = await searchParams
    const sortOrder = filters.sort
    delete filters.sort
    console.log(filters)
    const products:Product[] = await GetProducts(filters)
     
    return(
       <ProductsContainer products={products}/>           
    )
}

export default Home