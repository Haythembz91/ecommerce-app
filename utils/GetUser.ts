const GetUser = async()=>{

    try{
        const response = await fetch('/api/auth/user',{
            method:'GET',
            headers:{'x-requested-with':'XMLHttpRequest'},
            credentials:'include'
        })
        if(!response.ok){
            return null
        }
        const data = await response.json();
        if(!data.user){
            try{
                const refreshResponse = await fetch('/api/auth/refresh',{
                    method:'POST',
                    headers:{'x-requested-with':'XMLHttpRequest'},
                    credentials:'include'
                })
                if(!refreshResponse.ok){
                    return null
                }
                const refreshData = await refreshResponse.json();
                return refreshData.user
            }catch(e){
                const error = e as Error
                console.error(error)
                return null
            }
        }
        return data.user
    }catch(e){
        const error = e as Error
        console.error(error)
        return null
    }
}

export default GetUser