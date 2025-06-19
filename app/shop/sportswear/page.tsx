import {Product} from "@/utils/interfaces";
import {GetProducts} from "@/utils/GetProducts";
import ProductsContainer from "@/components/ProductsContainer"
import {sort} from "@/utils/enums"
import {Filters} from "@/utils/types";
const Home = async ({searchParams}:{searchParams:Promise<Filters>})=>{
    
    const filters = await searchParams
    const sortOrder = filters.sort
    delete filters.sort
    const products:Product[] = await GetProducts(filters)
    if (sortOrder===sort.PRICE_ASC){
        products.sort((a,b)=>Number(a.productPrice)-Number(b.productPrice))
    } else if (sortOrder===sort.PRICE_DSC){
        products.sort((a,b)=>Number(b.productPrice)-Number(a.productPrice))
    }else products.sort((a,b)=>new Date(b.dateAdded).getTime()- new Date(a.dateAdded).getTime())
     
    return(
       <ProductsContainer products={products}/>           
    )
}

export default Home