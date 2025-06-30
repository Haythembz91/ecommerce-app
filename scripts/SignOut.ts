
export async function SignOut() {
    try{
        const response = await fetch('/api/auth/logout');
        if(response.ok){
            window.location.href = '/'
        }
    }catch(e){
        const error = e as Error
        console.error(error.message)
    }
}