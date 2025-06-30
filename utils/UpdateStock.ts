import {getDb} from "@/utils/mongodb";
import {PurchasedItems} from "@/utils/interfaces";
import {ObjectId} from "mongodb";


const UpdateStock = async (items:PurchasedItems[])=>{
    try{
        const db = await getDb()
        if(!db){
            throw new Error('Database connection failed')
        }
        const productsCollection = db.collection('products')
        for (const item of items){
            const updateItem = await productsCollection.updateOne({_id: new ObjectId(item.productId)},
                {$inc: {[`productQuantities.${item.productColor}-${item.productSize}`]: -item.quantity}})
            if(!updateItem.acknowledged){
                throw new Error('Failed to update stock')
            }
        }
    }catch(e){
        const error = e as Error
        console.error(error.message)
    }
}
export default UpdateStock