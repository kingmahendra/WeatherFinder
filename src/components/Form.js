import React from 'react'

export const Form = props => (
    <div> 
        <form onSubmit={props.getWeather}> 
        <div>
            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..."/>
        </div>
        <button type="submit" className="btn btn-primary"> Find Weather </button>
        <button type="reset" onClick={props.reset} className="btn"> Reset</button>
        </form>
        
    </div>
)