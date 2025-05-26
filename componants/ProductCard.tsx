import {Product} from "@/utils/interfaces"

const ProductCard = ({product}:{product:Product})=>{

    const mainImg:string[] = product[product.productColor[0]] as string[]
      
  return(
      <div className={'col-6 col-md-3'}>
          <div className="card border-0">
              <img src={mainImg[1]} className="card-img-top" alt="..."/>
              <div className="card-body px-2">
                  <h5 className="card-title fs-6">{product.productName}</h5>
                  <p className="card-text mb-1">{product.productColor[0]}</p>
                  <p className={'card-text fw-medium'}>{product.productPrice}$</p>
              </div>
          </div>
      </div>   
  )
}

export default ProductCard
  