
const GetUser = async()=>{
    try{
        const response = await fetch('/api/auth/user')
        if(response.status===401){
            const refreshResponse = await fetch('api/auth/refresh')
            if(!refreshResponse.ok){
                throw new Error('Failed to refresh token')
            }
            const retry = await fetch('/api/auth/user')
            if(!retry.ok){
                throw new Error('Failed to get user')
            }
            const data = await retry.json()
            if(data.user){
                return data.user
            }
        }
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
        console.error(error.message)
        return null
    }
}

export default GetUser