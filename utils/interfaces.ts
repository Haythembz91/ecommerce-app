import {categories,sizes,colors,collections, sleeveLengths, legLengths} from "@/utils/enums"

export interface Product {
    _id: string;
    productName: string;
    productDescription: string;
    productCategory: categories;
    productSizes: sizes[];
    productColor: colors[];
    productPrice: number;
    sleeveLength?:sleeveLengths ;
    legLength?: legLengths;
    productCollection: collections;
    productQuantities: Record<string, number>;
    dateAdded: string;
    primaryColor:colors;
    urlByColor:string[];
}