import {categories,sizes,colors,collections} from "@/utils/enums"

export interface Product {
    id: string;
    name: string;
    description: string;
    category: categories;
    sizes: sizes[];
    colors: colors[];
    price: number;
    sleeveLength?: string;
    legLength?: string;
    collection?: collections;
}