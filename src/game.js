class Game {
  constructor(options, ctx) {
    this.canvas = null;
    this.ctx = options.ctx;
    this.Boss = [];
    this.player = null;
    this.ship = options.ship;
    this.rows = options.rows;
    this.columns = options.columns;
    this.maxCells = options.maxCells;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
    this.cb = callback;
  }

  _drawShip() {
    this.ctx.fillStyle = 'white';
    this.ship.body.forEach((position) => {
      this.ctx.fillRect(
        position.column * this.maxCells,
        position.row * this.maxCells,
        1,
        1
      );
    });
  }

  _drawStones() {
    this.ctx.fillStyle = 'brown';
    this.ctx.fillRect(this.stones.column * 10, this.stone.row * 10, 8, 8);
  }

  _generateStones() {
    this.stones = {
      row: Math.floor(Math.random() * this.row),
      column: Math.floor(Math.random() * this.columns),
    };
  }
  _clean() {
    this.ctx.clearRect(0, 0, 800, 600);
  }

  _update() {
    this._clean();
    this._drawShip();
    this._drawStones();
    if (this.ship.collidesWith(this.stones)) {
    }
    window.requestAnimationFrame(this._update.bind(this));
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