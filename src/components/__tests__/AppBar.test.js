import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AppBar, Level, Player, Points, Lives } from '../AppBar';

describe('AppBar', () => {
  it('renders without crashing (AppBar)', () => {
    shallow(
      <AppBar
        level={999}
        avatar={'image_url'}
        points={999}
        lives={999}
        changeAvatar={i => i}
      />,
    );
  });

  describe('Level', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Level level={999} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Player', () => {
    it('renders correctly', () => {
      const wrapper = shallow(
        <Player avatar={'image_url'} onChange={i => i} />,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Points', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Points points={999} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Lives', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Lives lives={999} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
