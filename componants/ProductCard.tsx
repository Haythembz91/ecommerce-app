import {Product} from "@/utils/interfaces"

const ProductCard = ({product}:{product:Product})=>{

      
  return(
      <div className={'col'}>
          <div className="card border-0">
              <img src={product.urlByColor[0]} className="card-img-top" alt="..."/>
              <div className="card-body px-2">
                  <h5 className="card-title fs-6">{product.productName}</h5>
                  <p className="card-text mb-1">{product.primaryColor}</p>
                  <p className={'card-text fw-medium'}>{product.productPrice}$</p>
              </div>
          </div>
      </div>   
  )
}

export default ProductCard
  