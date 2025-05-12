import {NextResponse,NextRequest} from "next/server";

export const GET = async (req: NextRequest, res:NextResponse) =>{
   try{
     const response = await fetch ('https://restcountries.com/v3.1/all')
      if (response.status===200){
        const data = await response.json()
        return NextResponse.json(data)
      }
   }catch(e){
     console.error(e)
      return NextResponse.json({message:'Error'}, {status:500})
   }
}