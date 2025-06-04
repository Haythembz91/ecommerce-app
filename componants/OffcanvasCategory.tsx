import {categories} from "@/utils/enums";

const OffcanvasCategory = ()=>{

    const arrCategories = [
        {
            banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749073912/01.Navigation.WB_CategoryBanner_1000x349px_20240111_lg_05310faf-7791-4b44-ba9d-19e72f7598a8_500x_bejdrl.avif',
            name:categories.LEGGINGS
        },
        {
            banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749073916/05.Navigation.WB_CategoryBanner_1000x349px_20240111_lg_eee060c9-75f9-4c45-9a2e-2d07c1fc65ae_500x_c2m8nm.avif',
            name:categories.T_SHIRTS_AND_TOPS
        },
        {
            banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749073913/02.Navigation.WB_CategoryBanner_1000x349px_20240111_lg_67773c0c-cb51-441d-8c16-69d3751b0442_500x_mschbf.webp',
            name:categories.JOGGERS
        },
        {
            banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749073914/03.Navigation.WB_CategoryBanner_1000x349px_20240111_lg_34469b6a-3df1-4eac-b352-86a00517f8be_500x_rcslqs.avif',
            name:categories.SHORTS
        },
        {
            banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749073915/04.Navigation.WB_CategoryBanner_1000x349px_20240111_lg_dd602626-72b0-49d4-8072-f205e88bc82d_500x_gz8avp.avif',
            name:categories.T_SHIRTS_AND_TOPS
        },
        {
            banner:'https://res.cloudinary.com/dmgfsayir/image/upload/v1749073917/06.Navigation.WB_CategoryBanner_1000x349px_20240111_lg_b6cb2138-0898-4e8f-b565-97ea8effa5df_500x_jcphds.avif',
            name:categories.HOODIES_SWEATSHIRTS_JACKETS
        }
    ]
    return (
        <div id={'offcanvas-category'} className={'col-12'}>
            <a className={'d-flex link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'} href={'#offcanvas-sportswear'}>
                <p>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                         clipRule="evenodd">
                        <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/>
                    </svg>
                </p>
                <p className={'text-center w-100'}>Shop by Category</p>
            </a>
            {arrCategories.map((col, index) => <div className={'position-relative p-1 d-flex align-items-center'}
                                                 key={index}>
                <a className={'fw-bold h-100 align-content-center link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover position-absolute w-100 p-2'} href={'#'}>{col.name.toUpperCase()}</a>
                <img className={'img-fluid'} src={col.banner} alt={col.name}/>
            </div>)
            }
        </div>
    )
}

export default OffcanvasCategory