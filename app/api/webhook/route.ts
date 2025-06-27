import { NextRequest, NextResponse } from 'next/server';
import {stripe} from "@/scripts/stripe"
import Stripe from "stripe";
import {SavePurchases} from "@/utils/savePurchases"
import {Purchase} from "@/utils/interfaces";
const endpointSecret = process.env.NODE_ENV === 'development' ? process.env.STRIPE_CLI_WEBHOOK_SECRET! : process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
    const rawBody = await req.text();
    const sig = req.headers.get('stripe-signature');

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(rawBody, sig!, endpointSecret);
    } catch (err) {
        const error = err as Error
        console.error('Webhook signature verification failed:', error.message);
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
    }


    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        const sessionId = session.id;
        if (!session.metadata?.userId) {
            console.warn('Missing userId in metadata');
            return new NextResponse('Missing metadata', { status: 400 });
        }
        console.log('Payment successful for user:', userId,sessionId);
        const fullSession = await stripe.checkout.sessions.retrieve(sessionId, {expand: ['line_items.data.price.product',
            'payment_intent.latest_charge']});
        const {line_items,payment_intent} = fullSession
        if(!line_items?.data){
            return new NextResponse('Missing line_items', { status: 400 });
        }
        let receipt_url = '';
        if (
            payment_intent &&
            typeof payment_intent !== 'string' &&
            'latest_charge' in payment_intent &&
            payment_intent.latest_charge &&
            typeof payment_intent.latest_charge !== 'string'
        ) {
            receipt_url = payment_intent.latest_charge.receipt_url!;
        }
        const items = []
        for(const item of line_items?.data){
            const product = item.price!.product;
            let image = '';
            if (typeof product !== 'string' && 'images' in product) {
                image = product.images[0] ?? '';
            }
            items.push({id:item.id,
                description:item.description!,
                price:item.price!.unit_amount!,
                totalPrice:item.amount_total,
                quantity:item.quantity!,
                currency:item.currency,
                image:image,
            })
        }
        const purchase:Purchase = {
            items:items,
            userId:userId,
            createdAt:new Date(),
            sessionId:sessionId,
            amount_total:fullSession.amount_total!,
            receipt_url:receipt_url
        }
        await SavePurchases(purchase)

    }

    return new NextResponse('Received', { status: 200 });
}
