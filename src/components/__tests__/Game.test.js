import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Game, GameOver } from '../Game';

describe('Game', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Game
        width={500}
        height={500}
        level={999}
        avatar={'image_url'}
        points={999}
        lives={999}
        changeState={i => i}
      />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('GameOver', () => {
    it('renders correctly', () => {
      const wrapper = shallow(
        <GameOver
          level={999}
          avatar={'image_url'}
          points={999}
          lives={999}
          onRestart={i => i}
        />,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
