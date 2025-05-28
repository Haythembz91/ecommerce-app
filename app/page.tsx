import SliderSportswear from "@/componants/SliderSportswear"
import Link from "next/link";
import {routes} from "@/utils/enums";
import mobileBanner from "@/1.WB_LowBackEdit_LaunchBanner_1600x2100_20250520_dp_mobile_400x@2x.jpg"
const Home = async ()=>{

    console.log("Ania Kubow")
    
    return(
        <div>
            <section>
                <SliderSportswear/>
            </section>
            <section className={'my-2 mx-md-2'}>
                <div className={'mx-2 mx-md-0 d-flex justify-content-between align-items-center'}>
                    <h2>Sportswear favorites</h2>
                    <Link className={'fw-medium link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'} href={`/shop${routes.SPORTSWEAR}`}>Shop</Link>
                </div>
                
            </section>
            <section className={'my-2 mx-md-2'}>
                <div className="card text-bg-dark">
                  <img src={mobileBanner.src} className="card-img" alt="..."/>
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
            </section>
        </div>
    )
}

export default Home