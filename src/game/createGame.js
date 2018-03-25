import Board from './Board';
import Enemy from './Enemy';
import Engine from './Engine';
import Player from './Player';

import { IMAGES, DEFAULT_PLAYER_IMAGE, INITIAL_STATE } from './constants';

export function createState(listener = i => i) {
  const state = {
    ...INITIAL_STATE,
    reset: function() {
      Object.keys(INITIAL_STATE).forEach(key => {
        this[key] = INITIAL_STATE[key];
      });
    },
  };

  const createHandler = listener => ({
    set(target, key, value) {
      if (listener) {
        listener(key, value);
      }
      target[key] = value;
      return true;
    },
  });

  return new Proxy(state, createHandler(listener));
}

export function createBoard(canvas) {
  const rowImages = [
    IMAGES['water-block'],
    IMAGES['stone-block'],
    IMAGES['stone-block'],
    IMAGES['stone-block'],
    IMAGES['grass-block'],
    IMAGES['grass-block'],
  ];

  return new Board(canvas, rowImages);
}

export function createPlayer(canvas) {
  const initialCoords = {
    x: 200,
    y: 400,
  };

  const player = new Player(canvas, initialCoords, DEFAULT_PLAYER_IMAGE);

  document.addEventListener('keyup', e => {
    const allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
    };

    player.handleInput(allowedKeys[e.keyCode]);
  });

  return player;
}

// Enemies our player must avoid
export function createEnemies(canvas) {
  const enemyInitialCoords = [
    { x: 0, y: 60 },
    { x: 0, y: 140 },
    { x: 0, y: 225 },
  ];

  const enemies = enemyInitialCoords.reduce((acc, coords) => {
    const enemy = new Enemy(canvas, coords, IMAGES['enemy-bug']);
    acc.push(enemy);
    return acc;
  }, []);

  return enemies;
}

export default function createGame(canvas, listener) {
  const state = createState(listener);
  const board = createBoard(canvas);
  const player = createPlayer(canvas);
  const enemies = createEnemies(canvas);

  const engine = new Engine(state, board, player, enemies);

  return {
    main: time => engine.main(time),
    changeAvatar: image => (player.image = image),
    restart: () => engine.restart(),
  };
}
