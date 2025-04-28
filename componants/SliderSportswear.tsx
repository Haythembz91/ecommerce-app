'use client'
import banner_wide1 from "@/public/assets/banners/1.WB_Define2.0_MainBanner_3000x1270_20250221_lh_desktop_ab401c72-4e88-4c4f-8f25-4b33e5837cb9_1600x.jpg"
import banner_wide2 from "@/public/assets/banners/01.Mixed.WB_EasterFlashSale_MainBanner_20250408_lm_desktop_1600x.webp"
import banner_wide3 from "@/public/assets/banners/Mixed.WB_KingsDaySale_MainBanner_3000x1270_20250417_lh_desktop_1600x.webp"
import banner_mobile1 from "@/public/assets/banners/1.WB_Define2.0_MainBanner_1600x2070_20250221_lh_mobile_caff70f7-39f5-40bb-8dc8-7ab8680aad1b_1000x.webp"
import banner_mobile2 from "@/public/assets/banners/01.Mixed.WB_EasterFlashSale_MainBanner_20250408_lm_mobile_680x.webp"
import banner_mobile3 from "@/public/assets/banners/Mixed.WB_KingsDaySale_MainBanner_1600x2070_20250417_lh_mobile_680x.webp"

import {useEffect} from 'react'

const SliderSportswear =()=>{
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return(
        <div className={""}>
            <div id={"carouselExampleControls"} className={"carousel slide carousel-fade"} data-bs-ride={"carousel"}>
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
                        <img
                            src={banner_wide1.src}
                            className={"d-none d-md-block w-100"} alt={"..."}/>
                        <img
                            src={banner_mobile1.src}
                            className={"d-md-none w-100"} alt={"..."}/>
                        <div className={"carousel-caption"}>
                            <h3 className={'bannerHeading fs-2 fw-bold'}>DEFINE 2.0</h3>
                            <h5 className={'fw-medium'}>New styles & colors</h5>
                            <button className={"btn btn-light"}
                                    style={{
                                        fontWeight: "600",
                                        borderRadius: "20px",
                                    }}>
                                Shop now
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={banner_wide2.src}
                            className={"d-none d-md-block w-100"} alt={"..."}/>
                        <img
                            src={banner_mobile2.src}
                            className={"d-md-none w-100"} alt={"..."}/>
                        <div className={"carousel-caption"}>
                            <h3 className={'bannerHeading fs-2 fw-bold'}>DISCOVER OUR BEST SELLERS</h3>
                            <h5 className={'fw-medium'}>Up to 70% off</h5>
                            <button className={"btn btn-light"}
                            style={{fontWeight:"600",borderRadius:"20px"}}>
                                Shop now
                            </button>
                        </div>
                    </div>
                    <div className={"carousel-item"}>
                        <img
                            src={banner_wide3.src}
                            className={"d-none d-md-block w-100"} alt={"..."}/>
                        <img
                            src={banner_mobile3.src}
                            className={"d-md-none w-100"} alt={"..."}/>
                        <div className={"carousel-caption"}>
                            <h3 className={'bannerHeading fs-2 fw-bold'}>SPRING EDIT</h3>
                            <h5 className={'fw-medium'}>New season, new energy</h5>
                            <button className={"btn btn-light"}
                                    style={{
                                        fontWeight: "600",
                                        borderRadius: "20px"
                                    }}>
                                Shop now
                            </button>
                        </div>
                    </div>
                </div>
                <button className={"carousel-control-prev"} type={"button"} data-bs-target={"#carouselExampleControls"}
                        data-bs-slide={"prev"}>
                    <span className={"carousel-control-prev-icon"} aria-hidden={"true"}></span>
                    <span className={"visually-hidden"}>Previous</span>
                </button>
                <button className={"carousel-control-next"} type={"button"} data-bs-target={"#carouselExampleControls"}
                        data-bs-slide={"next"}>
                    <span className={"carousel-control-next-icon"} aria-hidden={"true"}></span>
                    <span className={"visually-hidden"}>Next</span>
                </button>
            </div>
        </div>
    )
}
export default SliderSportswear