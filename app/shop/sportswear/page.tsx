import ProductCard from "@/componants/ProductCard";
import {Product} from "@/utils/interfaces";
import {GetProducts} from "@/utils/GetProducts";

const Home = async ()=>{
    const products:Product[] = await GetProducts()
    
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

export default Home