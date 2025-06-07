import { GetProducts } from "@/utils/GetProducts"
import ProductPageSlider from "@/componants/ProductPageSlider";

const Home = async ({params}:{params:{slug:string}})=>{
    const {slug} = await params
    const id = slug.split('_').pop()

    const product = await GetProducts({_id: id})
    console.log(product[0])
    


    
    
    return(
        <div>
            <nav>
                <ul className={'my-2 list-unstyled d-flex'}>
                    <li className={'list-item mb-0 text-secondary'}><a className={'p-2 link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'} href="/">Home</a>/</li>
                    <li className={'list-item mb-0 text-secondary'}><a className={'p-2 link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'} href="/shop/sportswear">Sportswear</a>/</li>
                    <li className={'list-item mb-0 text-secondary'}><a className={'p-2 link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'} href={'#'}>{product[0].productName}</a></li>
                </ul>
            </nav>
            <main className={'row'}>
                <ProductPageSlider product={product[0]}></ProductPageSlider>
                <div className={'container-fluid col-md-5'}>
                    <h1><b>{product[0].productName}</b></h1>
                    <h4><b>Color:</b> {product[0].primaryColor}</h4>
                </div>
            </main>
        </div>
    )
}

export default Home