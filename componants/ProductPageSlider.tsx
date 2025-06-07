import {Product} from "@/utils/interfaces";

const ProductPageSlider = ({product}: { product:Product })=>{
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators position-absolute bottom-0">
                {product.urlByColor.map((url,index)=>(
                    <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} style={{backgroundImage:`url(${url})`,height:'100px',backgroundSize:'cover'}}
                            className={index === 0 ? 'active w-100' : 'w-100'} aria-current={index === 0 ? 'true' : 'false'} aria-label={`Slide ${index+1}`}>
                    </button>
                ))}
            </div>
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
    )
}

export default ProductPageSlider