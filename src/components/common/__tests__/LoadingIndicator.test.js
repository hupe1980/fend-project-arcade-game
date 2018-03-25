import React from 'react';
import { shallow } from 'enzyme';
import LoadingIndicator from '../LoadingIndicator';

it('renders without crashing', () => {
  shallow(<LoadingIndicator />);
});
