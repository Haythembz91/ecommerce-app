import AuthComponent from "@/components/AuthComponent";


const Home = ()=>{
    return (
        <div className={'d-md-flex bg-body-secondary'}>
            <div className={'col-md-7'}>
                <img alt={'auth-banner'} src={'https://res.cloudinary.com/dmgfsayir/image/upload/v1751910196/Gemini_Generated_Image_ezh7coezh7coezh7_g6h9or.png'} className={'img-fluid'}/>
            </div>
            <AuthComponent></AuthComponent>
        </div>
    )
}

export default Home