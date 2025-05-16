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