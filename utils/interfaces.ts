import {categories,sizes,colors,collections, sleeveLengths, legLengths,other} from "@/utils/enums"

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

export interface SearchPageProps {
  searchParams: Record<string, string|undefined>;
}