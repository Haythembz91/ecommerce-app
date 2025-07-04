import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";
import {stripe} from "@/scripts/stripe"
import {CartItemType} from "@/utils/types";
import {Product} from "@/utils/interfaces";
import {GetProducts} from "@/utils/GetProducts";
import GetUserFromCookies from "@/utils/GetUserFromCookies";
import {checkoutLimiter} from "@/utils/rateLimit";
import {tokens} from "@/utils/enums";

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': process.env.PUBLIC_URL!,
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
        },
    });
}
export async function POST (req:NextRequest){
    try{
        const user = await GetUserFromCookies(tokens.ACCESS_TOKEN)
        if(!user){
            return NextResponse.json({message:'User not found'},{ status: 401 })
        }
        const userId = user._id.toString()
        const {success} = await checkoutLimiter.limit(`checkout-${userId}`);
        if (!success) {
            return NextResponse.json({ message: "Too many checkout attempts. Please wait." }, { status: 429 });
        }
        const headersList = await headers()
        const referer = headersList.get('referer')
        const origin = headersList.get('origin')
        const body = await req.json()
        const {items} = body
        if(!items){
            return NextResponse.json({message:'Items not found'},{ status: 400 })
        }
        const products: Product[] = await Promise.all(
            items.map(async (item: CartItemType) => {
                const result = await GetProducts({ _id: item.productId });
                return result[0]
            })
        );
        if(products.length===0){
            return NextResponse.json({message:'Products not found'},{ status: 400 })
        }
        const line_items = items.map((item:CartItemType)=> {
            const product = products.find(p => p._id === item.productId)
            if(!product||!product.productSizes.includes(item.productSize)){
                throw new Error('Product not found')
            }
            const quantity = Math.max(1,Math.min(product.productQuantities![`${product.primaryColor}-${item.productSize}`],item.productQuantity))
            return {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: product.productName + ' _ ' + product.primaryColor + ' _ ' + item.productSize,
                        images: [product.urlByColor![0]],
                        metadata:{
                            productId:product._id,
                            productColor:product.primaryColor,
                            productSize:item.productSize
                        }
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
            cancel_url: `${referer}`,
            metadata:{
                userId:userId!,
            }
        });
        return NextResponse.json(
            { url: session.url },
            {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': process.env.PUBLIC_URL!,
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                },
            }
        );
    }catch (err) {
        const error = err as Error
        return NextResponse.json(
            { error: error.message },
            {
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': process.env.PUBLIC_URL!,
                },
            }
        );
    }
}
