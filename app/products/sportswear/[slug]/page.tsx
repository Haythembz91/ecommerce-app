import { GetProducts } from "@/utils/GetProducts"

const Home =async({params}:{params:{slug:String}})=>{
    const {slug} = params
    const arr = slug.split('_')
    const color = arr.pop()
    const name= arr.join(' ')

    const product = await GetProducts({primaryColor:color, productName:name})
    


    
    
    return(
        <div>{product[0].productName + product[0].primaryColor + product[0]._id}</div>
    )
}

export default Home