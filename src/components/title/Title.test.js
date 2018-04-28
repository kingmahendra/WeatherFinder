import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import { Title } from './Title'

describe('Title Component', ()=> {
    it('should render title', () => {
        const component = shallow(<Title />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })
})