import {categories,sizes,colors,collections, sleeveLengths, legLengths} from "@/utils/enums"

export interface Product {
    id: string;
    productName: string;
    productDescription: string;
    productCategory: categories;
    productSizes: sizes[];
    productColors: colors[];
    productPrice: number;
    sleeveLength?:sleeveLengths ;
    legLength?: legLengths;
    productCollection: collections;
}