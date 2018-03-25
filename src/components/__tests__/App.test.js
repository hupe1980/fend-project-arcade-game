import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../App';
import { LoadingIndicator } from '../common';

describe('App', () => {
  it('renders correctly (state = { loading: true })', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<LoadingIndicator />)).toEqual(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders App (state = { loading: false })', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ loading: false });
    expect(wrapper.contains(<LoadingIndicator />)).toEqual(false);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
