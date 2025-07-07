import AuthComponent from "@/components/AuthComponent";
import banner from '@/public/assets/Gemini_Generated_Image_ezh7coezh7coezh7.png'


const Home = ()=>{
    return (
        <div className={'d-md-flex bg-body-secondary'}>
            <div className={'col-md-7'}>
                <img src={banner.src} className={'img-fluid'}/>
            </div>
            <AuthComponent></AuthComponent>
        </div>
    )
}

export default Home