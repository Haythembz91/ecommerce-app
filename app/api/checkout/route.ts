import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";
import {stripe} from "@/scripts/stripe"
import {CartItemType} from "@/utils/types";

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
        },
    });
}
export async function POST (req:NextRequest){
    try{
        const headersList = await headers()
        const origin = headersList.get('origin')
        const body = await req.json()
        const {items} = body
        const line_items = items.map((item:CartItemType)=>(
            {
                price_data:{
                    currency: 'eur',
                    product_data: {
                        name: item.productName + ' '+ item.productColor,
                        images: [item.productImage],
                    },
                    unit_amount: item.productPrice * 100,
                },
                quantity: item.productQuantity
            }
            )
        )
        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}`,
        });
        return NextResponse.json(
            { url: session.url },
            {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                },
            }
        );
    }catch (err:any) {
        NextResponse.json(
            { error: err.message },
            {
                status: err.statusCode || 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
    }
}
