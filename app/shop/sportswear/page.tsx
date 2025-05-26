import ProductCard from "@/componants/ProductCard";
import {Product} from "@/utils/interfaces";
import {GetProducts} from "@/utils/GetProducts";

const Home = async ()=>{
    const products:Product[] = await GetProducts()
    
    return(
        <div className={'d-flex flex-wrap'}>
            {products.map((product:Product)=>{
                return(
                    <ProductCard key={product._id} product={product}></ProductCard>
                )
            })}      
        </div>
    )
}

export default Home