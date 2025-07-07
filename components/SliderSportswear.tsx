import {collections, other} from "@/utils/enums";
import Link from "next/link";

const SliderSportswear =()=>{

    return(
        <div className={""}>
            <div id={"carouselExampleIndicators"} className={"carousel slide carousel-fade"} data-bs-ride={"carousel"}>
                <div className={"carousel-indicators"}>
                    <button type={"button"} data-bs-target={"#carouselExampleIndicators"} data-bs-slide-to={"0"}
                            className={"active"} aria-current={"true"} aria-label={"Slide 1"}></button>
                    <button type={"button"} data-bs-target={"#carouselExampleIndicators"} data-bs-slide-to={"1"}
                            aria-label={"Slide 2"}></button>
                    <button type={"button"} data-bs-target={"#carouselExampleIndicators"} data-bs-slide-to={"2"}
                            aria-label={"Slide 3"}></button>
                </div>
                <div className={"carousel-inner"}>
                    <div className={"carousel-item active"}>
                        <Link href={`/shop/sportswear?productCollection=${collections.DEFINE}`}>
                            <img
                                src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1749072499/1.WB_Define2.0_MainBanner_3000x1270_20250221_lh_desktop_ab401c72-4e88-4c4f-8f25-4b33e5837cb9_1600x_jsfucj.webp'}
                                className={"d-none d-md-block w-100"} alt={"Home banner"}/>
                            <img
                                src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1749072499/1.WB_Define2.0_MainBanner_1600x2070_20250221_lh_mobile_caff70f7-39f5-40bb-8dc8-7ab8680aad1b_1000x_qqjboq.webp'}
                                className={"d-md-none w-100"} alt={"Home banner"}/>
                        </Link>
                        <div className={"carousel-caption"}>
                            <h3 className={'bannerHeading fw-bold'}>DEFINE 2.0</h3>
                            <h6 className={'fw-medium'}>New styles & colors</h6>
                            <Link href={`/shop/sportswear?productCollection=${collections.DEFINE}`} className={"btn btn-light"}
                                    style={{
                                        fontWeight: "600",
                                        borderRadius: "20px",
                                    }}>
                                Shop now
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Link href={'/shop/sportswear'}>
                            <img
                                src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1749072499/01.Mixed.WB_EasterFlashSale_MainBanner_20250408_lm_desktop_1600x_ldtl0s.webp'}
                                className={"d-none d-md-block w-100"} alt={"Home banner"}/>
                            <img
                                src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1749072499/01.Mixed.WB_EasterFlashSale_MainBanner_20250408_lm_mobile_680x_bpxfqt.webp'}
                                className={"d-md-none w-100"} alt={"Home banner"}/>
                        </Link>
                        <div className={"carousel-caption"}>
                            <h3 className={'bannerHeading fw-bold'}>DISCOVER OUR BEST SELLERS</h3>
                            <h6 className={'fw-medium'}>Up to 70% off</h6>
                            <button className={"btn btn-light"}
                            style={{fontWeight:"600",borderRadius:"20px"}}>
                                Shop now
                            </button>
                        </div>
                    </div>
                    <div className={"carousel-item"}>
                        <Link href={`/shop/sportswear?other=${other.SPRING_EDIT}`}>
                            <img
                                src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1749072500/Mixed.WB_KingsDaySale_MainBanner_3000x1270_20250417_lh_desktop_1600x_zkujsv.webp'}
                                className={"d-none d-md-block w-100"} alt={"Home banner"}/>
                            <img
                                src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1749072500/Mixed.WB_KingsDaySale_MainBanner_1600x2070_20250417_lh_mobile_680x_w2gbm3.webp'}
                                className={"d-md-none w-100"} alt={"Home banner"}/>
                        </Link>
                        <div className={"carousel-caption"}>
                            <h3 className={'bannerHeading fw-bold'}>SPRING EDIT</h3>
                            <h6 className={'fw-medium'}>New season, new energy</h6>
                            <Link href={`/shop/sportswear?other=${other.SPRING_EDIT}`} className={"btn btn-light"}
                                    style={{
                                        fontWeight: "600",
                                        borderRadius: "20px"
                                    }}>
                                Shop now
                            </Link>
                        </div>
                    </div>
                </div>
                <button className={"carousel-control-prev"} type={"button"} data-bs-target={"#carouselExampleIndicators"}
                        data-bs-slide={"prev"}>
                    <span className={"carousel-control-prev-icon"} aria-hidden={"true"}></span>
                    <span className={"visually-hidden"}>Previous</span>
                </button>
                <button className={"carousel-control-next"} type={"button"} data-bs-target={"#carouselExampleIndicators"}
                        data-bs-slide={"next"}>
                    <span className={"carousel-control-next-icon"} aria-hidden={"true"}></span>
                    <span className={"visually-hidden"}>Next</span>
                </button>
            </div>
        </div>
    )
}
export default SliderSportswear