class Game {
  constructor(options) {
    this.ctx = options.ctx;
  }

  _drawShip() {
    this.ctx.fillStyle = 'white';
  }

  _drawStones() {
    this.ctx.fillStyle = 'brown';
    this.ctx.fillRect(this.obstacule)
  }

  _generateStones() {
    this.obstacule = {
      row: Math.floor(Math.random() * this.row),
      column: Math.floor(Math.random() * this.columns),
    };
  }
  
  _assignControlsToKeys() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp':
          this.ship.goUp();
          break;
        case 'ArrowDown':
          this.ship.goDown();
          break;
        case 'ArrowRight':
          this.ship.goRight();
          break;
        case 'ArrowLeft':
          this.ship.goLeft();
          break;
        default:
          break;
      }
    });
  }

  start() {
    this._assignControlsToKeys();
    this._generateStones();
    this.ship.move();
    window.requestAnimationFrame(this._update.bind(this));
  }
}