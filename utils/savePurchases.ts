import {getDb} from "@/utils/mongodb";
import Stripe from "stripe";
export const SavePurchases = async ({session}:{session:Stripe.Checkout.Session})=>{

    const userEmail = session.customer_email
    const items = session.metadata?.items

    const db = await getDb()
    const purchases = db.collection('purchases')
    const purchase = await purchases.insertOne({
        user: userEmail,
        items: JSON.parse(items || "[]"),
        createdAt: new Date(),
        sessionId: session.id,
    })
    if(!purchase.acknowledged){
        throw new Error('Failed to save purchase')
    }
}