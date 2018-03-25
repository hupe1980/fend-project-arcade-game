export const IMAGES = {
  'stone-block': 'images/stone-block.png',
  'water-block': 'images/water-block.png',
  'grass-block': 'images/grass-block.png',
  'enemy-bug': 'images/enemy-bug.png',
  'char-boy': 'images/char-boy.png',
  'char-cat-girl': 'images/char-cat-girl.png',
  'char-horn-girl': 'images/char-horn-girl.png',
  'char-pink-girl': 'images/char-pink-girl.png',
  'char-princess-girl': 'images/char-princess-girl.png',
  heart: 'images/heart.png',
};

export const DEFAULT_PLAYER_IMAGE = IMAGES['char-boy'];

export const INITIAL_STATE = {
  points: 0,
  level: 1,
  lives: 3,
};

export const GAME_WIDTH = 505;
export const GAME_HEIGHT = 606;

export const HIT_BOX = {
  WIDTH: 75,
  HEIGHT: 50,
};
