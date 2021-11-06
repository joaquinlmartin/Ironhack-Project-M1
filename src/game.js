class Game {
  constructor(options, ctx) {
    this.ctx = options.ctx;
    this.Boss = [];
    this.ship = options.ship;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
  }

  _drawShip() {
    this.ctx.fillStyle = 'red';
    console.log(this.ship);
    this.ctx.fillRect(this.ship.pos.x, this.ship.pos.y, 20, 20)
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
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, 800, 600);
  }

  _update() {

    this._clean();
    this._drawShip();
    // this._drawStones();
    // if (this.ship.collidesWith(this.stones)) {
    // }
    window.requestAnimationFrame(this._update.bind(this));
  }
  _assignControlsToKeys() {

    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp':
          this.Player.goUp();
          break;
        case 'ArrowDown':
          this.Player.goDown();
          break;
        case 'ArrowRight':
          this.Player.goRight();
          break;
        case 'ArrowLeft':
          this.Player.goLeft();
          break;
        default:
          break;
      }
    });
  }

  start() {
    this._assignControlsToKeys();
    // this._generateStones();
    window.requestAnimationFrame(this._update.bind(this));
  }
}