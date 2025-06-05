import { GetProducts } from "@/utils/GetProducts"
import { Product } from "@/utils/interfaces"
import {categories, collections, other,} from "@/utils/enums"
import ProductCard from "./ProductCard"



const ProductSlider = async ({filter}:{filter:Record<string,categories|collections|other>}) => {
    const favoriteProducts :Product[]= await GetProducts(filter)
    return(
        <div className="ps-2 row row-cols-1 row-cols-lg-2 mx-md-2 mt-5 mt-lg-0 gx-2 flex-nowrap overflow-x-scroll productSlide">
            {favoriteProducts.map((product,index)=>
            <ProductCard key={index} product={product}/>)}    
        </div>
    )
}

export default ProductSlider