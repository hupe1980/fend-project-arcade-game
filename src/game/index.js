import {
  IMAGES,
  GAME_WIDTH,
  GAME_HEIGHT,
  DEFAULT_PLAYER_IMAGE,
  INITIAL_STATE,
} from './constants';
import Resources from './Resources';

export { default as createGame } from './createGame';

export function preloadImages(cb) {
  Resources.load(Object.values(IMAGES));
  Resources.onReady(cb);
}

export { IMAGES, GAME_WIDTH, GAME_HEIGHT, DEFAULT_PLAYER_IMAGE, INITIAL_STATE };
