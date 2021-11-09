class Game {
  constructor(options, ctx, speed) {
    this.ctx = options.ctx;
    this.enemy = [];
    this.ship = options.ship;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
    this.posX = options.posX;
    this.posY = options.posY;
    this.stones = [];
    this.player = null;
    this.speed = speed;
  }

  _drawShip() {
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(this.ship.posX, this.ship.posY, 20, 20);
    /*let speed1 = 0;
    let speed2 = 0;
    let speed3 = 0;*/
  }

  _drawStones() {
    this.stones.forEach((stone) => {
      this.ctx.fillStyle = 'brown';
      this.ctx.fillRect(stone.posX, stone.posY, 10, 10);
    })
    

  }

  _generateStones() {
    this.stones.push(new Stones(1280, 200, 50, 10))
  }
  _updatePosition() {
    this.PosX += this.direction * this.speed;
    this.PosY += this.direction * this.speed;
    this._drawShip()
  }
  _loopCanvas() {

  }
  _clean() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, 1280, 720);
  }

  _update() {
    this._clean();
    this._drawShip();
    this._drawStones();
    
    window.requestAnimationFrame(this._update.bind(this));
  }
  _assignControlsToKeys() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp':
          this.ship.posY--;
          break;
        case 'ArrowDown':
          this.ship.posY++;
          break;
        case 'ArrowRight':
          this.ship.posX++;
          break;
        case 'ArrowLeft':
          this.ship.posX--;
          break;
        /*Diagonal/
        case 'ArrowUp, ArrowRight':
        this.ship.posY--;
        this.ship.posX++;  
          break;*/
        case 'Space':
          this.ship.posX++;
          break;
        default:
          break;
      }
    });
  }
  /*_updatePosition() {
    this.posY -= this.speed;
    this.posX -= this.speed;
  }*/
  start() {
    this._assignControlsToKeys();
    this._updatePosition();
    this._generateStones();
    window.requestAnimationFrame(this._update.bind(this));
  }

}