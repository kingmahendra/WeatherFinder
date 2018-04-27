import React from 'react'

export const Form = props => (
    <div className="form"> 
        <form onSubmit={props.getWeather}> 
        <input type="text" name="city" placeholder="city..."/>
        <input type="text" name="country" placeholder="country..."/>
        <button type="submit" className="btn btn-primary"> Find Weather </button>
        </form>
    </div>
)