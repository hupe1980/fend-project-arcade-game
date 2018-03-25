import Player from '../Player';
import { DEFAULT_PLAYER_IMAGE } from '../constants';

describe('Player', () => {
  let player;

  beforeEach(() => {
    const initialCoords = {
      x: 200,
      y: 400,
    };
    const canvas = document.createElement('canvas');
    player = new Player(canvas, initialCoords, DEFAULT_PLAYER_IMAGE);
  });

  it('resets to start position', () => {
    player.coords = {
      x: 999,
      y: 999,
    };
    expect(player.coords).not.toEqual(player.initialCoords);
    player.reset();
    expect(player.coords).toEqual(player.initialCoords);
  });

  it('forbids to move off screen (right)', () => {
    player.coords.x = 401;
    player.update();
    expect(player.coords.x).toEqual(400);
  });

  it('forbids to move off screen (left)', () => {
    player.coords.x = -1;
    player.update();
    expect(player.coords.x).toEqual(0);
  });

  it('forbids to move off screen (below)', () => {
    player.coords.y = 401;
    player.update();
    expect(player.coords.y).toEqual(400);
  });

  it('resets to start position if the player reaches the water', () => {
    player.coords.y = -1;
    player.update();
    expect(player.coords).toEqual(player.initialCoords);
  });

  it('calls the callback if the player reaches the water', () => {
    const mockCallback = jest.fn();
    player.onPass(mockCallback);
    player.coords.y = -1;
    player.update();
    expect(mockCallback).toHaveBeenCalled();
  });
});
