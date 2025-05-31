import { GetProducts } from "@/utils/GetProducts"
import { Product } from "@/utils/interfaces"
import { collections } from "@/utils/enums"
import ProductCard from "./ProductCard"



const ProductSlider = async () => {
    const favoriteProducts :Product[]= await GetProducts({productCollection:collections.SMOOTHCONTOUR})
    return(
        <div className="row row-cols-2 gx-2 flex-nowrap overflow-x-scroll productSlide">
            {favoriteProducts.map((product,index)=>
            <ProductCard key={index} product={product}/>)}    
        </div>
    )
}

export default ProductSlider