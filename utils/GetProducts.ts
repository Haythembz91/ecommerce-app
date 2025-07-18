import {Filters} from "@/utils/types";

export const GetProducts = async(filters:Filters)=>{
   const searchParams = new URLSearchParams(filters).toString()

   try{
      const response = await fetch(`${process.env.NODE_ENV === 'development' ? process.env.BASE_URL : process.env.PUBLIC_URL}/api/product?${searchParams}`,{
         headers:{
            'x-requested-with':'XMLHttpRequest'
         },
         next:{revalidate:60}
      })
   return response.json()
   }catch(e){
      console.error(e)
   }
}