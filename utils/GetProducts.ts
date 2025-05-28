
export const GetProducts = async(query:Record<string,string|undefined>)=>{
   const searchParams = new URLSearchParams(query).toString()
   try{
      const response = await fetch(`${process.env.BASE_URL}/api/product?${searchParams}`,{
         headers:{
            'x-requested-with':'XMLHttpRequest'
         }
      })
   const products = await response.json()
   return products.sort(()=>Math.random()-0.5)
   }catch(e){
      console.error(e)
   }
}