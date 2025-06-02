import { GetProducts } from "@/utils/GetProducts"

const Home = async ({params}:{params:{slug:string}})=>{
    const {slug} = await params
    const id = slug.split('_').pop()

    const product = await GetProducts({_id: id})
    


    
    
    return(
        <div>{product[0].productName + product[0].primaryColor + product[0]._id}</div>
    )
}

export default Home