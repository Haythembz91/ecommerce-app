import { GetProducts } from "@/utils/GetProducts"
import { ObjectId } from "mongodb"

const Home =async({params}:{params:{slug:String}})=>{
    const {slug} = params
    const id = slug.split('_').pop()

    const product = await GetProducts({_id: id})
    


    
    
    return(
        <div>{product[0].productName + product[0].primaryColor + product[0]._id}</div>
    )
}

export default Home