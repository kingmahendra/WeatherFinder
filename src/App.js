import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Title } from './components/Title'
import { Form } from './components/Form'
import { Weather } from './components/Weather'

const API_KEY= 'd6d091ab1a32a6e22f178d8cbc1f5401'

class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    weather:{
      temperature: undefined,
      humidity: undefined,
      windspeed: undefined,
      description: undefined,
    },
    error: undefined
  }

  getWeather = async (event) => {
    event.preventDefault()
    const city =  event.target.elements.city.value
    const country =  event.target.elements.country.value

    if(city && country) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&unit=metric`)
    
      const data = await api_call.json()
  
      this.setState({
        city:data.name,
        country:data.sys.country,
        weather:{
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windspeed: data.wind.speed,
          description: data.weather[0].description,
        },
        error:''
      })
    }else {
      this.setState({
        city: undefined,
        country: undefined,
        weather:{
          temperature: undefined,
          humidity: undefined,
          windspeed: undefined,
          description: undefined,
        },
        error: 'Please enter city and country'
   
      })
    }
   
    
  }


  render() {
    return (
      <div>
         <div className="wrapper">
            <div className="main">
              <div className="container">
                 <div className="row">
                   <div className="col-xs-5 title-container"> <Title/> </div>
                   <div className="col-xs-7 form-container">
                      <Form getWeather={this.getWeather}/>
                      <Weather city={this.state.city}
                                country={this.state.country}
                                weather={this.state.weather}
                                error={this.state.error}
                      />
                   </div>
                 </div>
              </div>
            </div>
         </div>
      </div>
    );
  }
}

export default App;

       