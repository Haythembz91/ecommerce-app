
const GetUser = async()=>{
    try{
        const response = await fetch('/api/auth/user')
        if (!response.ok){
            const error = await response.json()
            console.log(error)
            return null
        }
        const data  = await response.json()
        if(data.user){
            return data.user
        }
    }catch(e){
        const error = e as Error
        console.error(error)
    }
}

export default GetUser