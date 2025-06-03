import { getDb } from "../utils/mongodb";

const EditProducts = async ()=>{
    const db = await getDb()
    const productsCollection = db.collection('products')
    const products = await productsCollection.find().toArray()
    console.log(products.length)
    
}

export default EditProducts
