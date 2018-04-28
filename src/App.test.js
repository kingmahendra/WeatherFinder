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

  it('form componnet should call  getWeather', () => {
    const getWeather=jest.fn();
    const component = mount((<Form getWeather={getWeather}/>))
    component.find('form').simulate('submit')
    expect(getWeather.mock.calls.length).toBe(1)
  })
})


