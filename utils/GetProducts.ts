
export const GetProducts = async(filters:Record<string,string|undefined>)=>{
   const searchParams = new URLSearchParams(filters).toString()
   try{
      const response = await fetch(`${process.env.BASE_URL}/api/product?${searchParams}`,{
         headers:{
            'x-requested-with':'XMLHttpRequest'
         }
      })
   return response.json()
   }catch(e){
      console.error(e)
   }
}