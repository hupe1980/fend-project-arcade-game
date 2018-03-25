import Resources from './Resources';

export default class Board {
  constructor(canvas, rowImages) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.rowImages = rowImages;
  }

  render() {
    const { width, height } = this.canvas;

    this.ctx.clearRect(0, 0, width, height);

    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 5; col++) {
        this.ctx.drawImage(
          Resources.get(this.rowImages[row]),
          col * 101,
          row * 83,
        );
      }
    }
  }
}
