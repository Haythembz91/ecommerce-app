export const GetProducts = async()=>{ 
   try{
      const response = await fetch(`${process.env.BASE_URL}/api/product`)
   const products = await response.json()
   return products
   }catch(e){
      console.error(e)
   }
}