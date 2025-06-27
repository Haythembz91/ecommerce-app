import {getDb} from "@/utils/mongodb";
import {Purchase} from "@/utils/interfaces";
export const SavePurchases = async (purchase:Purchase)=>{
    const db = await getDb()
    const purchases = db.collection('purchases')
    const addPurchase = await purchases.insertOne({
        userId: purchase.userId,
        items: purchase.items,
        createdAt: purchase.createdAt,
        sessionId: purchase.sessionId,
        receipt_url: purchase.receipt_url,
        amount_total: purchase.amount_total
    })
    if(!addPurchase.acknowledged){
        throw new Error('Failed to save purchase')
    }
}