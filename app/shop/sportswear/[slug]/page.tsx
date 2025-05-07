'use client'
import {useParams} from "next/navigation";

const Home = ()=>{

    const slug = useParams().slug;


    return(
        <div>
            {slug}
        </div>
    )
}

export default Home