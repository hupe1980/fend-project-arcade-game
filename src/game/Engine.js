import { HIT_BOX } from './constants';

export default class Engine {
  constructor(state, board, player, allEnemies) {
    this.state = state;
    this.board = board;
    this.player = player;
    this.player.onPass(() => this.onPlayerPass());
    this.allEnemies = allEnemies;
    this.lastTime = 0;
  }

  main(time) {
    const dt = (time - this.lastTime) / 1000.0;

    if (this.state.lives > 0) {
      this.update(dt);
      this.render();
    }

    this.lastTime = time;
  }

  render() {
    this.board.render();

    this.allEnemies.forEach(enemy => {
      enemy.render();
    });

    this.player.render();
  }

  onPlayerPass() {
    this.state.points = this.state.points + 1;

    // Level Up
    if (this.state.points % 5 === 0) {
      this.state.level = this.state.level + 1;
      this.allEnemies.forEach(enemy => {
        enemy.nextLevel();
      });
    }
  }

  update(dt) {
    this.updateEntities(dt);
    this.checkCollisions();
  }

  checkCollisions() {
    const { WIDTH, HEIGHT } = HIT_BOX;
    const pX = this.player.coords.x;
    const pY = this.player.coords.y;

    this.allEnemies.forEach(enemy => {
      const eX = enemy.coords.x;
      const eY = enemy.coords.y;

      if (
        pX < eX + WIDTH &&
        pX + WIDTH > eX &&
        pY < eY + HEIGHT &&
        pY + HEIGHT > eY
      ) {
        this.state.lives = this.state.lives - 1;
        this.player.reset();
      }
    });
  }

  updateEntities(dt) {
    this.allEnemies.forEach(enemy => {
      enemy.update(dt);
    });

    this.player.update();
  }

  restart() {
    this.player.reset();
    this.allEnemies.forEach(enemy => {
      enemy.reset();
    });
    this.state.reset();
  }
}
