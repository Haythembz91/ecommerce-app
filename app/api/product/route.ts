import {NextResponse, NextRequest} from "next/server";
import { getDb } from "@/utils/mongodb";
import {UploadToCloudinary} from "@/utils/UploadToCloudinary";
import {categories, sleeveLengths, legLengths, collections, colors, sizes, other} from "@/utils/enums";
import {Product} from "@/utils/interfaces";
import { ObjectId } from "mongodb";
import {Filters} from "@/utils/types";


export async function POST(req:NextRequest){
    const map = new Map<string,File[]>()
    const imagesByColor :Record<string,string[]>={}
    const quantitiesMap= new Map<string,number>()
    const productVariants:Product[]=[]
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
        for (const [key, value] of formData.entries()){
            if(!key.includes('-')) continue
            quantitiesMap.set(key, Number(value))
        }
        const productCategory = formData.get('productCategory') as categories
        const product:Product = {
            productName: formData.get('productName') as string,
            productDescription: formData.get('productDescription') as string,
            productCategory: formData.get('productCategory') as categories,
            sleeveLength:productCategory===categories.UNITARDS||productCategory===categories.T_SHIRTS_AND_TOPS?formData.get('sleeveLength') as sleeveLengths:undefined,
            legLength:productCategory===categories.LEGGINGS?formData.get('legLength') as legLengths:undefined,
            productCollection: formData.get('productCollection') as collections,
            productColor:formData.getAll('productColor') as colors[],
            productSizes:formData.getAll('productSizes') as sizes[],
            productPrice: Number(formData.get('productPrice')).toFixed(2),
            productQuantities:Object.fromEntries(quantitiesMap),
            dateAdded: new Date().toISOString(),
            other:formData.get('other') as other
        }
        for(const color of Object.keys(imagesByColor)){
           const productVariant:Product = {...product,'urlByColor':imagesByColor[color],'primaryColor':color as colors}
            productVariants.push(productVariant)
        }
        const db = await getDb()
        const productsCollection = db.collection('products')
        const addProduct = await productsCollection.insertMany(productVariants)
        if(addProduct.acknowledged)
        {
        return NextResponse.json({message:'Product Added Successfully'}, {status: 200})
        }
    } catch (error) {
        console.error(error)
    }
}

export async function GET(req:NextRequest){
    const requestedWith = req.headers.get('x-requested-with')
    if(requestedWith !== 'XMLHttpRequest')

        return NextResponse.json({message:'Invalid Request'}, {status: 400})

    const searchParams = req.nextUrl.searchParams
    const filters:Filters = Object.fromEntries(searchParams.entries())
    const limit = Number(filters.limit)
    if (filters._id&& ObjectId.isValid(filters._id)){
        filters._id= new ObjectId(filters._id)
    }
    if (filters.limit){
        delete filters.limit
    }
    const query = searchParams.get('query')
    const regex = new RegExp(query as string, 'i')
    try{
        const db=await getDb()
        if (!db) {
            return NextResponse.json({ message: 'Database connection failed' }, { status: 500 });
        }
        const productsCollection = db.collection('products')
        if(query){
        const products = await productsCollection.find({
            $or:[
{productName:regex},
                {productCategory:regex},
                {productCollection:regex},
                {primaryColor:regex},
                
{legLength:regex},
                {sleeveLength:regex},
             ]
        }).toArray()
        return NextResponse.json(products, {status: 200})
        }
        const products = await productsCollection.find(filters).sort({_id:-1}).limit(!isNaN(limit)?limit:0).toArray()
        return NextResponse.json(products, {status: 200})
    
    }catch(e){
        console.error(e)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}