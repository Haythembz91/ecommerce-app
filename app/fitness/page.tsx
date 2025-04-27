import banner_wide1 from "@/public/assets/banners/01.WB_CollagenPeptidesPlusCapsules_LaunchBanner_3000x1270_20250113_dp_desktop_1600x.webp"
import banner_wide2 from "@/public/assets/banners/Nutrition.WB_KingsDaySale_MainBanner_3000x1270_20250325_lh_desktop_1600x.webp"
import banner_wide3 from "@/public/assets/banners/01.WB_BestSellers_Nutrition_Update_MainBanner_20250130_lh_desktop_1600x.webp"
import banner_mobile1 from "@/public/assets/banners/01.WB_CollagenPeptidesPlusCapsules_LaunchBanner_1600x2070_20250113_dp_mobile_680x.webp"
import banner_mobile2 from "@/public/assets/banners/Nutrition.WB_KingsDaySale_MainBanner_1600x2070_20250325_lh_mobile_680x.webp"
import banner_mobile3 from "@/public/assets/banners/01.WB_BestSellers_Nutrition_Update_MainBanner_20250130_lh_mobile_680x.webp"

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