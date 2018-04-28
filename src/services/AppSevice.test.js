import { convertToCelcius, apiRequest } from './AppService'
describe('App Service', ()=> {
    it('convertToCelcius convert kelvin to celcius', () => {
        const result = convertToCelcius(300)
        expect(result).toEqual(27)
    })

    it('apiRequest should return weather data',()=> {
        expect.assertions(1);
        const city='London'
        const country='UK'
        return apiRequest(city, country).then(data => {
          expect(data.name).toEqual('London')
        });
    })
    it('apiRequest should return error when wrong city provided',()=> {
        expect.assertions(2);
        const city='delhi'
        const country='UK'
        return apiRequest(city, country).then(data => {
          expect(data.cod).toEqual('404')  
          expect(data.message).toEqual('city not found')
        });
    })
})