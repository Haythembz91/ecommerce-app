import {NextResponse, NextRequest} from "next/server";
import { getDb } from "@/utils/mongodb";
import {colorsList} from "@/utils/const";
import {UploadToCloudinary} from "@/utils/UploadToCloudinary";
import {v4 as uuidv4} from "uuid";


export async function POST(req:NextRequest){
    const map = new Map<string,File[]>()
    const imagesByColor :Record<string,string[]>={}
    try {
        const formData = await req.formData()
        for (const [key, value] of formData.entries()){
            if (!(value instanceof File)) continue
            if (!map.has(key))
                map.set(key, [])
            map.get(key)!.push(value)
        }
        for (const color of map.keys()){
            const files = map.get(color)!
            const urls = await Promise.all(files.map(file =>{
                return UploadToCloudinary(file, `products/${formData.get('productName')}/${color}`)
                
            }                                       ))
            imagesByColor[color] = urls.map(url => url.url)
        }
        const product = {
            productName: formData.get('productName'),
            productDescription: formData.get('productDescription'),
            productCategory: formData.get('productCategory'),
            sleeveLength: formData.get('sleeveLength'),
            legLength: formData.get('legLength'),
            productCollection: formData.get('productCollection'),
            productColor:formData.get('productColor'),
            productSizes:formData.get('productSizes'),
            productPrice: formData.get('productPrice'),
            ...imagesByColor,
        }
        console.log(product)
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