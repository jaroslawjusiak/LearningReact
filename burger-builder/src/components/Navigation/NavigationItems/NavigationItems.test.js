import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

// Describe(description, test())  - takes two parameters: 
// 1. description (usually component name - html syntax is not required)
// 2. test function -> it() allows to write single test

// it(description, ) - also two params
// 1. Tells what we test anh how it should work
// 2. Actual test
describe('<NavigationItems />', () => {
    it('should render two <NavigationItems /> elements if not authenticated', () => {
        const wrapper = shallow(<NavigationItems />);

        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
});