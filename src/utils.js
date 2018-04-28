

export const convertToCelcius= (temperatureInKelvin) => {
    return Math.round(temperatureInKelvin - 273.15);
}

export const apiRequest = (city, country) => {
    const API_KEY= 'd6d091ab1a32a6e22f178d8cbc1f5401'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&unit=metric`
    return fetch(url).then(data => data.json())
}

