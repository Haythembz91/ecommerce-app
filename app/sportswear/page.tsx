import banner_wide1 from "@/public/assets/banners/Wear.WB_EasterSale_MainBanner_3000x1270_20250321_iw_desktop_2600x.webp"
import banner_wide2 from "@/public/assets/banners/01.Mixed.WB_EasterFlashSale_MainBanner_20250408_lm_desktop_1600x.webp"
import banner_wide3 from "@/public/assets/banners/1.WB_Essential_LaunchBanner_3000x1270_20250317_lm_desktop_1600x.webp"
import banner_mobile1 from "@/public/assets/banners/Wear.WB_EasterSale_MainBanner_1600x2070_20250321_iw_mobile_768x.webp"
import banner_mobile2 from "@/public/assets/banners/01.Mixed.WB_EasterFlashSale_MainBanner_20250408_lm_mobile_680x.webp"
import banner_mobile3 from "@/public/assets/banners/1.WB_Essential_LaunchBanner_1600x2100_20250317_lm_mobile_680x.webp"

import Slider from "@/componants/Slider";

const page = ()=>{
    return (
        <div>
            <Slider banner_wide1={banner_wide1} banner_wide2={banner_wide2}
            banner_wide3={banner_wide3} banner_mobile1={banner_mobile1}
            banner_mobile2={banner_mobile2} banner_mobile3={banner_mobile3}
            ></Slider>
        </div>
    )
}

export default page