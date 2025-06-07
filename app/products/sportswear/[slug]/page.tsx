import { GetProducts } from "@/utils/GetProducts"
import ProductPageSlider from "@/componants/ProductPageSlider";

const Home = async ({params}:{params:{slug:string}})=>{
    const {slug} = await params
    const id = slug.split('_').pop()

    const product = await GetProducts({_id: id})
    console.log(product[0])
    


    
    
    return(
        <div>{product[0].productName + product[0].primaryColor + product[0]._id}
            <ProductPageSlider product={product[0]}></ProductPageSlider>
        </div>
    )
}

export default Home