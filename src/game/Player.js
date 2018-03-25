import Figure from './Figure';

export default class Player extends Figure {
  constructor(canvas, initialCoords, image) {
    super(canvas, initialCoords, image);

    this.initialCoords = {
      ...initialCoords,
    };
    this.passCallbacks = [];
  }

  update() {
    if (this.coords.x > 400) {
      this.coords.x = 400;
    }

    if (this.coords.x < 0) {
      this.coords.x = 0;
    }

    if (this.coords.y > 400) {
      this.coords.y = 400;
    }

    if (this.coords.y < 0) {
      this.passCallbacks.forEach(cb => cb());
      this.reset();
    }
  }

  handleInput(key) {
    //eslint-disable-next-line default-case
    switch (key) {
      case 'up':
        this.coords.y -= 50;
        break;
      case 'down':
        this.coords.y += 50;
        break;
      case 'left':
        this.coords.x -= 50;
        break;
      case 'right':
        this.coords.x += 50;
        break;
    }
  }

  onPass(cb) {
    this.passCallbacks.push(cb);
  }

  reset() {
    this.coords = {
      ...this.initialCoords,
    };
  }
}
