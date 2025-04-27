import banner_wide1 from "@/public/assets/banners/Mixed.WB_KingsDaySale_MainBanner_3000x1270_20250417_lh_desktop_1600x.webp"
import banner_wide2 from "@/public/assets/banners/01.WB_BestSellers_Nutrition_Update_MainBanner_20250130_lh_desktop_1600x.webp"
import banner_wide3 from "@/public/assets/banners/1.WB_Define2.0_MainBanner_3000x1270_20250221_lh_desktop_ab401c72-4e88-4c4f-8f25-4b33e5837cb9_1600x.jpg"
import banner_mobile1 from "@/public/assets/banners/Mixed.WB_KingsDaySale_MainBanner_1600x2070_20250417_lh_mobile_680x.webp"
import banner_mobile2 from "@/public/assets/banners/01.WB_BestSellers_Nutrition_Update_MainBanner_20250130_lh_mobile_680x.webp"
import banner_mobile3 from "@/public/assets/banners/1.WB_Define2.0_MainBanner_1600x2070_20250221_lh_mobile_caff70f7-39f5-40bb-8dc8-7ab8680aad1b_1000x.webp"

import Slider from "@/componants/Slider"


const Home = ()=>{
     
  return(
      <div>
        <Slider banner_wide1={banner_wide1} banner_wide2={banner_wide2}
            banner_wide3={banner_wide3} banner_mobile1={banner_mobile1}
            banner_mobile2={banner_mobile2} banner_mobile3={banner_mobile3}
            ></Slider>
      </div>
  )
}

export default Home