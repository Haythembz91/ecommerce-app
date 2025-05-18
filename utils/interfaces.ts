import {categories,sizes,colors,collections, sleeveLengths, legLengths} from "@/utils/enums"

export interface Product {
    id: string;
    name: string;
    description: string;
    category: categories;
    sizes: sizes[];
    colors: colors[];
    price: number;
    sleeveLength?:sleeveLengths ;
    legLength?: legLengths;
    collection?: collections;
}

export interface Variant{
    id: string;
    productId: string;
    size: sizes;
    color: colors;
    price: number;
    quantity: number;
}

export interface ImageVariant{
    id: string;
    color:colors;
    imageUrl:string[];
}