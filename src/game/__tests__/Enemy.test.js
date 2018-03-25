import Enemy from '../Enemy';
import { IMAGES } from '../constants';

describe('Enemy', () => {
  let enemy;

  beforeEach(() => {
    const canvas = document.createElement('canvas');
    enemy = new Enemy(canvas, { x: 0, y: 60 }, IMAGES['enemy-bug']);
  });

  it('adds one to the level', () => {
    expect(enemy.level).toEqual(1);
    enemy.nextLevel();
    expect(enemy.level).toEqual(2);
  });

  it('resets to startposition', () => {
    expect(enemy.coords.x).not.toEqual(-50);
    enemy.reset();
    expect(enemy.coords.x).toEqual(-50);
  });

  it('calculates new speed', () => {
    const speed = enemy.speed;
    enemy.reset();
    expect(enemy.speed).not.toEqual(speed);
  });
});
