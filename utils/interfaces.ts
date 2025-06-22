import {categories,sizes,colors,collections, sleeveLengths, legLengths,other,roles} from "@/utils/enums"
import {ObjectId} from "mongodb";


export interface Product {
    _id?: string;
    productName: string;
    productDescription: string;
    productCategory: categories;
    productSizes: sizes[];
    productColor: colors[];
    productPrice: string;
    sleeveLength?:sleeveLengths ;
    legLength?: legLengths;
    productCollection: collections;
    productQuantities: Record<string, number>;
    dateAdded: string;
    primaryColor?:colors;
    urlByColor?:string[];
    other?:other
}
export interface ProductVariant extends Omit<Product, '_id'> {
    _id?: ObjectId;
}

export interface User{
    username?:string;
    avatar?:string|null;
    email_address?:string;
    hashedPassword:string;
    role?:roles
}
