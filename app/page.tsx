import SliderSportswear from "@/componants/SliderSportswear"
import ProductSlider from "@/componants/ProductSlider";
import Link from "next/link";
import {routes} from "@/utils/enums";
const Home = async ()=>{

    console.log("Ania the best")
    
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
                <ProductSlider></ProductSlider>
            </section>
        </div>
    )
}

export default Home