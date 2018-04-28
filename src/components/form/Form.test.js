import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import { Form } from './Form'

describe('Form Component', ()=> {
    it('should render Form', () => {
        const component = shallow(<Form />)
        const tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })
})