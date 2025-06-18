import { GetProducts } from "@/utils/GetProducts"
import {Product} from "@/utils/interfaces"
import ProductCard from "./ProductCard"
import {Filters} from "@/utils/types";
import Link from "next/link";



const ProductSlider = async ({filter}:{filter:Filters}) => {
    const favoriteProducts :Product[]= await GetProducts(filter);
    if (favoriteProducts)
    return(
        <div className="d-flex flex-nowrap gap-2 overflow-x-scroll productSlide">
            {favoriteProducts.map((product,index)=>
                <div key={index} className={'col-10 col-md-5 pt-md-5 pe-0'}>
                    <Link className="text-decoration-none" href={`/products/sportswear/${encodeURIComponent(product.productName)}_${product.primaryColor}`}>
                        <ProductCard product={product}/>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default ProductSlider