

export const convertToCelcius= (temperatureInKelvin) => {
    return Math.round(temperatureInKelvin - 273.15);
}

export const apiRequest = async(city, country) =>{
    const API_KEY= 'd6d091ab1a32a6e22f178d8cbc1f5401'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&unit=metric`
    const api_call = await fetch(url)
    const data = await api_call.json()
    return data
}

