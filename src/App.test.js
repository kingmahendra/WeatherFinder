import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme'
import App from './App';
import {Form} from './components/form/Form'

describe('App Component', ()=> {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('getWeather() should be called on form submit', () => {
    const getWeather=jest.fn();
    const component = mount((<Form getWeather={getWeather}/>))
    component.find('form').simulate('submit')
    expect(getWeather.mock.calls.length).toBe(1)
  })
  it('getWeather() should update the app state', async() => {
    const app = mount((<App/>))
    const event = {
      target:{
        elements:{
          city:{value:'London'},
          country:{value:'UK'},
        }
      },
      preventDefault:()=>({})
    }
     await app.instance().getWeather(event)
     const appState = app.instance().state
     expect(appState.city).toEqual('London')
     expect(appState.country).toEqual('GB')
  })

  it('getWeather() should update the app state with error', async() => {
    const app = mount((<App/>))
    const event = {
      target:{
        elements:{
          city:{value:''},
          country:{value:''},
        }
      },
      preventDefault:()=>({})
    }
     await app.instance().getWeather(event)
     const appState = app.instance().state
     expect(appState.error).toEqual('Please enter city and country')
  })

  it('getWeather() should update the app state with error if city not found', async() => {
    const app = mount((<App/>))
    const event = {
      target:{
        elements:{
          city:{value:'delhi'},
          country:{value:'UK'},
        }
      },
      preventDefault:()=>({})
    }
     await app.instance().getWeather(event)
     const appState = app.instance().state
     expect(appState.error).toEqual('city not found')
  })

  it('reset() should be called on reset button click', () => {
    const resetMock=jest.fn();
    const component = mount((<Form reset={resetMock}/>))
    component.find('button[type="reset"]').simulate('click')
    expect(resetMock.mock.calls.length).toBe(1)
  })

  it('reset() should reset the app state', () => {

    const initialState = {
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

    const app = mount((<App/>))
    app.instance().setState({
      city: 'test',
      country: 'test'
    })
    
    app.instance().reset()
    const appState = app.instance().state
    expect(appState).toEqual(initialState)
    
  })

})


