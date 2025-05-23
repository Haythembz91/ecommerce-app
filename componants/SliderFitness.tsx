import banner_wide1 from "@/public/assets/banners/01.WB_CollagenPeptidesPlusCapsules_LaunchBanner_3000x1270_20250113_dp_desktop_1600x.webp"
import banner_wide2 from "@/public/assets/banners/Nutrition.WB_KingsDaySale_MainBanner_3000x1270_20250325_lh_desktop_1600x.webp"
import banner_wide3 from "@/public/assets/banners/01.WB_BestSellers_Nutrition_Update_MainBanner_20250130_lh_desktop_1600x.webp"
import banner_mobile1 from "@/public/assets/banners/01.WB_CollagenPeptidesPlusCapsules_LaunchBanner_1600x2070_20250113_dp_mobile_680x.webp"
import banner_mobile2 from "@/public/assets/banners/Nutrition.WB_KingsDaySale_MainBanner_1600x2070_20250325_lh_mobile_680x.webp"
import banner_mobile3 from "@/public/assets/banners/01.WB_BestSellers_Nutrition_Update_MainBanner_20250130_lh_mobile_680x.webp"

const SliderSportswear =()=>{
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
                            <h2 className={'bannerHeading fs-2 fw-bold text-dark'}>Collagen Peptides Plus+ Capsules</h2>
                            <h4 className={'fw-medium text-dark'}>Supports skin, hair, nails and overall appearance. With high-quality collagen</h4>
                            <button className={"btn btn-light"}
                                    style={{
                                        fontWeight: "600",
                                        borderRadius: "20px"
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
                            <h2 className={'bannerHeading fs-2 fw-bold text-dark'}>DISCOVER OUR BEST SELLERS</h2>
                            <h4 className={'fw-medium text-dark'}>Up to 70% off</h4>
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
                            <h2 className={'bannerHeading fs-2 fw-bold text-light'}>SPRING SALE</h2>
                            <h4 className={'fw-medium text-light'}>Up to 70% off</h4>
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