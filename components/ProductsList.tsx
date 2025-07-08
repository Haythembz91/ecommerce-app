import {Product} from "@/utils/interfaces";
import {GetProducts} from "@/utils/GetProducts";

const ProductsList = async ()=>{

    const products:Product[] = await GetProducts({})
    if(!products)
        return <div className={'d-flex justify-content-center'}>
            <div className={'spinner-border'} role={'status'}>
                <span className={'visually-hidden'}>Loading...</span>
            </div>
        </div>
    return (
        <div>
            {products.map((product)=>
                <div key={product._id} className={'d-md-flex p-2 border-bottom'}>
                    <div>
                        <img style={{width:'100px'}} src={product.urlByColor![0]} className={'img-fluid'} alt={product.productName} />
                    </div>
                    <div className={'px-2'}>
                        <h5 className={'my-0 fw-bold'}>{product.productName}</h5>
                        <p className={'my-0'}>{product.primaryColor}</p>
                        <p className={'my-0'}>{product.productPrice}€</p>
                        <p className={'my-0'}>{product.productCategory}</p>
                        <p className={'my-0'}>{product.productCollection}</p>
                        <div>
                            <table className={'table table-striped table-bordered'}>
                                <thead>
                                <tr>
                                    {
                                        Object.entries(product.productQuantities!).map((variant,index)=>{
                                            if(!variant[0].includes(product.primaryColor!)) return null
                                            return (
                                                <th key={index}>{variant[0].split('-')[1]}</th>
                                            )
                                        })
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    {
                                        Object.entries(product.productQuantities!).map((variant,index)=>{
                                            if(!variant[0].includes(product.primaryColor!)) return null
                                            return (
                                                <td key={index}>{variant[1]}</td>
                                            )
                                        })
                                    }
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductsList