import React from 'react';
import { shallow } from 'enzyme';
import Heading from '../Heading';

it('renders without crashing', () => {
  shallow(<Heading />);
});
