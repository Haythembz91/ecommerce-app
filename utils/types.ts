import {sizes, colors, collections, legLengths, sleeveLengths, other, sort, categories} from "@/utils/enums"
import {ObjectId} from "mongodb"

export type Filters={
    _id?:string,
    productSizes?:sizes,
    productCollection?:collections,
    legLength?:legLengths,
    sleeveLength?:sleeveLengths,
    other?:other,
    sort?:sort,
    primaryColor?:colors
    productCategory?:categories
    productName?:string
    productPrice?:string
    limit?:string
    query?:string
}

export type FiltersDb = Omit <Filters,'_id'>&{
    _id?:ObjectId
}

export type CartItemType={
    id:string,
    productId:string,
    productName:string,
    productImage:string,
    productColor:colors,
    productSize:sizes,
    productQuantity:number,
    productPrice:number,
    stock:number
    legLength?:legLengths
    sleeveLength?:sleeveLengths
}

export type CartContextType={
    items:CartItemType[],
    addItem:(item:CartItemType)=>void,
    updateItemQuantity:(id:string,quantity:number)=>void,
    removeItem:(id:string)=>void,
    clearCart:()=>void,
    toggleCart:()=>void,
    show:boolean
}

