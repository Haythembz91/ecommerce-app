import Header from "@/componants/Header";
import Slider from "@/componants/Slider";
import { currentUser } from '@clerk/nextjs/server'


const Home = async ()=>{
     const user = await currentUser()
     console.log(user)
  return(
      <>
        <Header></Header>
          <main>
              <Slider></Slider>
          </main>
      </>
  )
}

export default Home