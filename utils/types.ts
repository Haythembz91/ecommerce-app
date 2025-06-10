import {sizes, colors, collections, legLengths, sleeveLengths, other, sort, categories} from "@/utils/enums"

export type Filters={
    productSizes?:sizes[],
    productCollection?:collections,
    legLength?:legLengths,
    sleeveLength?:sleeveLengths,
    other?:other,
    sort?:sort,
    primaryColor?:colors
    productCategory?:categories
    productName?:string
    productPrice?:number
    limit?:number
}