import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";
import {stripe} from "@/scripts/stripe"
import {CartItemType} from "@/utils/types";
import {Product} from "@/utils/interfaces";
import {GetProducts} from "@/utils/GetProducts";

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
        const products: Product[] = await Promise.all(
            items.map(async (item: CartItemType) => {
                const result = await GetProducts({ _id: item.productId });
                return result[0]
            })
        );
        const line_items = items.map((item:CartItemType)=> {
            const product = products.find(p => p._id === item.productId)
            if(!product||!product.productSizes.includes(item.productSize)){
                throw new Error('Product not found')
            }
            const quantity = Math.max(1,Math.min(product.productQuantities[`${product.primaryColor}-${item.productSize}`],item.productQuantity))
            return {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: product.productName + ' - ' + product.primaryColor + ' - ' + item.productSize,
                        images: [product.urlByColor![0]],
                    },
                    unit_amount: Number(product.productPrice) * 100,
                },
                quantity: quantity
            }
        })
        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}`,
            metadata: {
                cart: JSON.stringify(items),
            },
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
    }catch (err) {
        return NextResponse.json(
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
