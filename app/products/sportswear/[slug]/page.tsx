
const Home =async({params}:{params:{slug:String}})=>{
    const {slug} = params
    const arr = slug.split('-')
    const color = arr.pop()
    const name= arr.join(' ')


    
    
    return(
        <div>{name + ' '+ color}</div>
    )
}

export default Home