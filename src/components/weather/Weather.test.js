import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import { Weather } from './Weather'

describe('Wheather Component', ()=> {
    it('should render city and country and weather info', () => {
        const state = {
            city: 'London',
            country: 'UK',
            weather: {
               temperature: 31,
               humidity: 10,
               windspeed: 10,
               description: 'some desc',
            },
            error: ''
           }
        const component = shallow(<Weather city={state.city} country={state.country} weather={state.weather} error={state.error}/>)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })

    it('should render error', () => {
        const state = {
            city: undefined,
            country: undefined,
            weather:{
              temperature: undefined,
              humidity: undefined,
              windspeed: undefined,
              description: undefined,
            },
            error: 'City not found'
        }
        const component = shallow(<Weather city={state.city} country={state.country} weather={state.weather} error={state.error}/>)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })


})

