import Figure from './Figure';

const calcSpeed = level => level * 50 + Math.floor(Math.random() * 300);

// Enemies our player must avoid
export default class Enemy extends Figure {
  constructor(canvas, initialCoords, image, level = 1) {
    super(canvas, initialCoords, image);
    this.level = level;
    this.speed = calcSpeed(this.level);
  }

  nextLevel() {
    this.level++;
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.coords.x += this.speed * dt;

    if (this.coords.x > 500) {
      this.reset();
    }
  }

  reset() {
    this.coords.x = -50;
    this.speed = calcSpeed(this.level);
  }
}
