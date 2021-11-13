class Game {
  constructor(options, ctx, speed) {
    this.ctx = options.ctx;
    this.enemy = [];
    this.stones = [];
    this.shoot = [];
    this.ship = options.ship;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
    this.posX = options.posX;
    this.posY = options.posY;
    this.player = options.player;
    this.speed = speed;
  }

  _drawShip() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.ship.posX, this.ship.posY, 20, 20);
  }

  _drawStones() {
    this.stones.forEach((stone) => {
      this.ctx.fillStyle = 'brown';
      this.ctx.fillRect(stone.posX, stone.posY, 10, 10);
    })
  }

  _drawEnemy() {
    this.enemy.forEach((enemy) => {
      this.ctx.fillStyle = 'gold';
      this.ctx.fillRect(enemy.posX, enemy.posY, 25, 25);
    })
  }
  _drawShoot() {
    this.shoot.forEach((shoot) => {
      this.ctx.fillStyle = 'silver';
      this.ctx.fillRect(shoot.posX, shoot.posY, 5, 5);
    })
  }

  _generateStones() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.stones.push(new Stones(getRandomInt(0, 1280), getRandomInt(20, 700)));
  }

  _generateStonesInterval() {
    setInterval(() => {
      this._generateStones();
    }, 1000);
  }

  _generateEnemy() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.enemy.push(new Enemy(getRandomInt(0, 1280), getRandomInt(20, 600)));
  }

  _generateEnemyInterval() {
    setInterval(() => { 
      this._generateEnemy();
    }, 2000);
  }

  _generateShoot() {
    this.shoot.push(new Shoot(0, 500));
  }

  _assignControlsToKeys() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'KeyW':
          this.ship.posY -= this.ship.speed;
          break;
        case 'KeyS':
          this.ship.posY += this.ship.speed;
          break;
        case 'KeyD':
          this.ship.posX += this.ship.speed;
          break;
        case 'KeyA':
          this.ship.posX -= this.ship.speed;
          break;
        case 'Space':
          this.ship.posX += this.ship.speed+20;
          break;
        default:
          break;
      }
    });
  }

  _clean() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, 1280, 720);
  }

  _update() {
    this._clean();
    this._drawShip();
    this._drawStones();
    this._drawEnemy();
    this._drawShoot();
    window.requestAnimationFrame(this._update.bind(this));
  }

  start() {
    this._assignControlsToKeys();
    this._generateStones();
    this._generateStonesInterval();
    this._generateEnemy();
    this._generateEnemyInterval();
    this._generateShoot();
    window.requestAnimationFrame(this._update.bind(this));
  }
}