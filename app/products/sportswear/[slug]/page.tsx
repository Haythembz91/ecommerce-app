import { GetProducts } from "@/utils/GetProducts"
import ProductPageSlider from "@/componants/ProductPageSlider";
import Link from "next/link";
import AddToCartForm from "@/componants/AddToCartForm";
import {colors} from "@/utils/enums";

const Home = async ({params}:{params:{slug:string}})=>{
    const {slug} = await params
    const decodedSlug = decodeURIComponent(slug)
    const arr = decodedSlug.split('_')

    const product = await GetProducts({productName:arr[0],primaryColor:arr[1] as colors})

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
            </main>
        </div>
    )
}

export default Home