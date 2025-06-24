import { NextRequest, NextResponse } from 'next/server';
import {stripe} from "@/scripts/stripe"
import Stripe from "stripe";
import {SavePurchases} from "@/utils/savePurchases"
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

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

        await SavePurchases({session})
    }

    return new NextResponse('Received', { status: 200 });
}
