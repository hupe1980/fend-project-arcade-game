import Resources from './Resources';

export default class Figure {
  constructor(canvas, coords, image) {
    this.ctx = canvas.getContext('2d');
    this.coords = coords;
    this.image = image;
    this.show = true;
  }

  update() {
    throw new Error('Method has to be implemented');
  }

  // Draw the figure on the screen
  render() {
    if (this.show) {
      const { x, y } = this.coords;
      this.ctx.drawImage(Resources.get(this.image), x, y);
    }
  }
}
