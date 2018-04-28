import React from 'react'

export const Weather = props => (
        <div className="weather__info"> 
            {
                props.city && props.country && <p className="weather__key"> Loction :
                  <span className="weather__value"> {props.city} {props.country}  </span>
                </p> 
            }
            {
                props.weather.temperature && <p className="weather__key"> Temperature : 
                    <span className="weather__value"> {props.weather.temperature} </span>
                </p> 
            }
            {
                props.weather.humidity && <p className="weather__key"> Humidity : 
                    <span className="weather__value"> {props.weather.humidity} </span>
                </p>
            }
            {
                props.weather.windspeed &&  <p className="weather__key"> Wind Speed : 
                 <span className="weather__value"> {props.weather.windspeed} </span>
                </p>
            }
            {
                props.weather.description && <p className="weather__key"> Condition : 
                    <span className="weather__value"> {props.weather.description} </span>
                </p>
            }
            {
                props.error && <p className="weather__error">{props.error}</p>
            }
          
        </div>
     )
