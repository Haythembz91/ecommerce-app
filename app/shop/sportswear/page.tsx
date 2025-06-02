import {Product} from "@/utils/interfaces";
import {GetProducts} from "@/utils/GetProducts";
import ProductsContainer from "@/componants/ProductsContainer"
import {sort} from "@/utils/enums"

const Home = async ({searchParams})=>{
    
    const filters = await searchParams
    const sortOrder = filters.sort
    delete filters.sort
    const products:Product[] = await GetProducts(filters)
    if (sortOrder===sort.PRICE_ASC){
        products.sort((a,b)=>a.productPrice-b.productPrice)
    } else if (sortOrder===sort.PRICE_DSC){
        products.sort((a,b)=>b.productPrice-a.productPrice)
    }else products.sort((a,b)=>new Date(b.dateAdded)- new Date(a.dateAdded))
     
    return(
       <ProductsContainer products={products}/>           
    )
}

export default Home