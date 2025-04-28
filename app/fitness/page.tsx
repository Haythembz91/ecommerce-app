'use client'
import SliderFitness from "@/componants/SliderFitness";
import {useEffect} from "react";


const Home = ()=>{
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js")
    }, []);
  return(
      <div>
        <SliderFitness></SliderFitness>
      </div>
  )
}

export default Home