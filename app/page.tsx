import SliderSportswear from "@/componants/SliderSportswear"
import ProductSlider from "@/componants/ProductSlider";

const Home = ()=>{


    return(
        <div>
            <section>
                <SliderSportswear/>
            </section>
            <section className={'my-2 mx-md-2'}>
                <ProductSlider></ProductSlider>
            </section>
        </div>
    )
}

export default Home