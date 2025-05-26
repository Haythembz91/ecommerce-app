import ProductCard from "@/componants/ProductCard"


const ProductSlider = () => {
    
    return(
        <div className="row gx-2 flex-nowrap overflow-x-scroll productSlide">
            <ProductCard/>
        </div>
    )
}

export default ProductSlider