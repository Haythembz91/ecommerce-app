import SliderSportswear from "@/componants/SliderSportswear"
import Link from "next/link";
import {categories, collections, routes} from "@/utils/enums";
import ProductSlider from "@/componants/ProductSlider";
import ProductMiniSlider from "@/componants/ProductMiniSlider";
import {collectionBanners} from "@/utils/const";

const Home = ()=>{

    console.log("Ania Kubow")
    
    return(
        <div>
            <section>
                <SliderSportswear/>
            </section>
            <section className={'my-2 mx-md-2'}>
                <div className={'mx-2 mx-md-0 d-flex justify-content-between align-items-center'}>
                    <h2>Trending Activewear</h2>
                    <Link className={'fw-medium link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'} href={`/shop${routes.SPORTSWEAR}`}>Shop All</Link>
                </div>
                <ProductSlider filter={{limit:8}}></ProductSlider>
            </section>
            <section className={'my-2 mx-md-2'}>
                <div className={'mx-2 mx-md-0 d-flex justify-content-between align-items-center'}>
                    <h2>THE UNITARDS ARE BACK</h2>
                </div>
                <div className={'row row-cols-2 mx-0'}>
                    <img className={'img-fluid row d-none d-lg-block'} src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1749130167/1.WB_DefineUnitard_RestockBanner_2ss240430_iw_desktop_2000x_rlfc3r.webp'}/>
                    <img className={'object-fit-cover img-fluid row d-lg-none'} src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1749130167/1.WB_DefineUnitard_RestockBanner_2ss240430_iw_mobile_768x_d4addc.webp'}/>
                    <ProductMiniSlider filter={{productCategory:categories.UNITARDS,limit:6}}></ProductMiniSlider>
                </div>
            </section>
            <section className={'my-2 mx-md-2'}>
                <div className="card border-0 text-bg-dark">
                    <img src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1749072500/1.WB_LowBackEdit_LaunchBanner_20250520_dp_desktop_2000x_ywdurm.webp'} className="d-none card-img rounded-0 d-md-block" alt="..."/>
                    <img src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1749072501/1.WB_LowBackEdit_LaunchBanner_1600x2100_20250520_dp_mobile_400x_2x_kmjz1l.jpg'} className="d-md-none rounded-0 card-img" alt="..."/>
                  <div className="carousel-caption">
                    <h3 className="card-title fw-bold ">LOW BACK EDIT</h3>
                    <h6 className="card-text">Bringing the heat.</h6>
                      <button className={"btn btn-light"}
                              style={{
                                  fontWeight: "600",
                                  borderRadius: "20px",
                              }}>
                          Shop now
                      </button>
                  </div>
                </div>
                <div className={'mx-2 mx-md-0 d-flex justify-content-between align-items-center'}>
                    <h2>Sportswear favorites</h2>
                    <Link className={'fw-medium link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'} href={`/shop${routes.SPORTSWEAR}?productCollection=${collections.DEFINE}`}>Shop</Link>
                </div>
                <ProductSlider filter={{productCollection:collections.DEFINE,limit:8}}></ProductSlider>
            </section>
            <section className={'d-flex overflow-scroll'}>
                {collectionBanners.map((banner,index)=>(
                    <Link key={index} className={'col-10 ps-3 col-md-3 text-decoration-none'} href={`/shop${routes.SPORTSWEAR}?productCollection=${banner.title}`}>
                        <div className="card rounded-0 border-0">
                            <img src={banner.src} className="card-img-top rounded-0" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{banner.title}</h5>
                                <p className="card-text">{banner.text}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    )
}

export default Home