

export const getImage = async( api, query)=>{
    const url = `https://pixabay.com/api/?key=${api}&q=${query}&min_width=1920px&min_height=1280px&category=places&image_type=photo`

    const response = await fetch(url)
    try{
        if(response.ok){
            return response.json()
        }
    }catch (err){
        throw new Error('Something went wrong with getting picture')
    }
}