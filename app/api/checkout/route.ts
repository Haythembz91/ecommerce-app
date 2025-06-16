import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";
import {stripe} from "@/scripts/stripe"


export async function POST (req:NextRequest){
    try{
        const headersList = await headers()
        const origin = headersList.get('origin')
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Sportswear Hoodie',
                        },
                        unit_amount: 3500, // $35.00
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/?canceled=true`,
        });
        return NextResponse.redirect(session.url, 303)
    }catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
    }
}
