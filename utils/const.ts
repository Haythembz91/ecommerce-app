import {categories, collections, colors, legLengths, other, sizes, sleeveLengths, sort} from "@/utils/enums"

export const sizesList:sizes[]=[sizes.XS,sizes.S,sizes.M,sizes.L,sizes.XL,sizes.XXL]

export const categoriesList:categories[]=[categories.LEGGINGS,categories.JOGGERS,categories.SPORTS_BRAS,categories.SHORTS,categories.T_SHIRTS_AND_TOPS,categories.HOODIES_SWEATSHIRTS_JACKETS,categories.UNITARDS]

export const colorsList:colors[]=[colors.BLACK,colors.RED,colors.GREEN,colors.BLUE,colors.YELLOW,colors.GREY,colors.WHITE,colors.PINK,colors.BROWN,colors.MEDIUM_ORCHID]

export const 
collectionsList:collections[]=[collections.MOTION,collections.DEFINE,collections.POWER,collections.ESSENTIAL,collections.COMFORT,collections.SMOOTHCONTOUR]

export const legLengthsList:legLengths[]=[legLengths.SEVEN_EIGHT,legLengths.REGULAR,legLengths.LONG]

export const sleeveLengthsList:sleeveLengths[]=[sleeveLengths.SHORT,sleeveLengths.LONG, sleeveLengths.SLEEVELESS]

export const otherList:other[]=[other.BEST_SELLERS,other.NEW_RELEASES,other.SPRING_EDIT, other.LOW_BACK_EDIT]

export const sortList:sort[]=[sort.NEWEST,sort.PRICE_DSC,sort.PRICE_ASC]

export const collectionBanners = [{
    src:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749569313/1.WB_Website_MainPage_Collections_20250429_lg_600x_xozqpw.webp',
    title:collections.DEFINE,
    text:'Made to help you lift heavy and without restrictions.'
},
    {
        src:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749569313/2.WB_Website_MainPage_Collections_20250429_lg_600x_uki3mx.webp',
        title:collections.POWER,
        text:'Made to help you reach new PBs.'
    },
    {
        src:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749569313/3.WB_Website_MainPage_Collections_20250429_lg_600x_hicaoa.webp',
        title:collections.SMOOTHCONTOUR,
        text:'Made for soft and stretchy layering.'
    },
    {
        src:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749569313/4.WB_Website_MainPage_Collections_20250429_lg_600x_homy3h.webp',
        title:collections.ESSENTIAL,
        text:'Made with comfort and all-day versatility in mind.'
    }]