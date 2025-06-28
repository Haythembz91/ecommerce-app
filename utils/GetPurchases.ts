import {getDb} from "@/utils/mongodb";


const GetPurchases = async (userId:string)=>{
    try{
        const db = await getDb()
        if(!db){
            throw new Error('Database connection failed')
        }
        const purchaseCollection = db.collection('purchases')
        const purchases = await purchaseCollection.find({userId: userId}).toArray()
        if(purchases.length === 0){
            return []
        }
        return purchases
    }catch(e){
        const error = e as Error
        console.error(error)
    }
}

export default GetPurchases