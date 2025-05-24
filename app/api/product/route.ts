import {NextResponse, NextRequest} from "next/server";
import { getDb } from "@/utils/mongodb";

export async function POST(req:NextRequest){
    try {
        const formData = await req.formData()
        console.log(formData)

        return NextResponse.json({message:'Product Added Successfully'}, {status: 200})    
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