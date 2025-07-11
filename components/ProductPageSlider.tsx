import {Product} from "@/utils/interfaces";

const ProductPageSlider = ({product}: { product:Product })=>{
    if(!product.urlByColor)
        return <div>No product found</div>
    return(
        <div className={'col-md-7'}>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {product.urlByColor.map((url, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={url} className="d-block w-100" alt="product image"/>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="d-flex justify-content-center gap-1 py-1">
                {product.urlByColor.map((url,index)=>(
                    <a key={index} role="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index}
                            className={`${index === 0 ? 'active' : ''}`} style={{width:'200px',}} aria-current={index === 0 ? 'true' : undefined} aria-label={`Slide ${index+1}`}>
                        <img src={url} className="d-block w-100 opacity-75" alt="product image"/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ProductPageSlider