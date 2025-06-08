import { GetProducts } from "@/utils/GetProducts"
import ProductPageSlider from "@/componants/ProductPageSlider";
import Link from "next/link";
import AddToCartForm from "@/componants/AddToCartForm";

const Home = async ({params}:{params:{slug:string}})=>{
    const {slug} = await params
    const decodedSlug = decodeURIComponent(slug)
    const arr = decodedSlug.split('_')

    const product = await GetProducts({productName:arr[0],primaryColor:arr[1]})
    console.log(product[0])

    
    return(
        <div>
            <nav className={'product-breadcrumbs'}>
                <ul className={'my-2 list-unstyled d-flex'}>
                    <li className={'list-item mb-0 text-secondary'}><Link className={'p-1 link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'} href="/">Home</Link>/</li>
                    <li className={'list-item mb-0 text-secondary'}><Link className={'p-1 link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'} href="/shop/sportswear">Sportswear</Link>/</li>
                    <li className={'list-item mb-0 text-secondary'}><Link className={'p-1 link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'} href={'#'}>{product[0].productName}</Link></li>
                </ul>
            </nav>
            <main className={'d-md-flex'}>
                <ProductPageSlider product={product[0]}></ProductPageSlider>
                <AddToCartForm product={product[0]}></AddToCartForm>
                <div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Product Description
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>{product[0].productDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home