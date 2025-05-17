import {NextResponse, NextRequest} from "next/server";
import { getDb } from "@/utils/mongodb";

export async function POST(req:NextRequest){
    try {
        const product = await req.json()
        console.log(product)
        const db=await getDb()
        const productsCollection = db.collection('products')
        const addProduct = await productsCollection.insertOne(product)
        if(addProduct.acknowledged){
            return NextResponse.json({message:'Product Created Successfully'}, {status: 201})
        }
    } catch (error) {
        console.error(error)
    }
}

export async function GET(req:NextRequest){
    try{
        const db=await getDb()
        const productsCollection = db.collection('products')
        const products = await productsCollection.find().toArray()
        return NextResponse.json(products, {status: 200})
    }catch(e){
        console.error(e)
    }
}