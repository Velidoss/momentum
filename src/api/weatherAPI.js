
export const getWeather = async (api, city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
    const response = await fetch(url)
    try{
        if(response.ok){
           return response.json()
        }
    }catch(err){
        throw new Error(err)
    }
}
