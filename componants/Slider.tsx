'use client'
import {useEffect} from 'react'

const Slider =({banner_mobile1,banner_mobile2,banner_mobile3,banner_wide1,banner_wide2,banner_wide3})=>{
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
                            <h2 className={'bannerHeading fs-2 fw-bold'}>DEFINE 2.0</h2>
                            <p>New styles & colors</p>
                            <button className={"btn btn-light"}
                                    style={{
                                        fontWeight: "bold",
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
                            <h2 className={'bannerHeading fs-2 fw-bold'}>EASTER SALE</h2>
                            <p>Up to 70% off</p>
                            <button className={"btn btn-light"}
                            style={{fontWeight:"bold",borderRadius:"20px"}}>
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
                            <h2 className={'bannerHeading fs-2 fw-bold'}>SPRING EDIT</h2>
                            <p>New season, new energy</p>
                            <button className={"btn btn-light"}
                                    style={{
                                        fontWeight: "bold",
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
export default Slider