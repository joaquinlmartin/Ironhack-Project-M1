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

  // _updatePosition() {
  //   this.PosX += this.direction * this.speed;
  //   this.PosY += this.direction * this.speed;
  // }

  //  _canIMoveToNextPosition(nextPositionY, nextPositionX){
  //   return this.stones[nextPositionY][nextPositionX] !== '';
  //   }
    _checkCollisionEnemy(nextPositionY, nextPositionX){
    return this.enemy.some(function(enemy){
    return enemy.posY === nextPositionY && enemy.posX === nextPositionX;
    }) 
    }
    _identifyEnemy(nextPositionY, nextPositionX){
    return this.enemy.findIndex((enemy) => {
    return enemy.posY === nextPositionY && enemy.posX === nextPositionX
    }) 
    } 

  // _checkCollision() {
  //   if (
  //     this.player.posX < this.stone.posX + this.stone.width &&
  //     this.player.posX + this.player.width > this.stone.posX &&
  //     this.player.posY < this.stone.posY + this.stone.height &&
  //     this.player.height + this.player.posY > this.stone.posY
  //     // this.ship.posX < this.enemy.posX + this.enemy.width &&
  //     // this.ship.posX + this.ship.width > this.enemy.posX &&
  //     // this.ship.posY < this.enemy.posY + this.enemy.height &&
  //     // this.ship.height + this.ship.posY > this.enemy.posY
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // _checkCollisions() {
  //   this.enemy.forEach((enemy) => {
  //       if (enemy.type === "muerte") {
  //           if (this.player.didCollide(enemy)) {
  //               this.player.removeLives();



  //               enemy.posX = 0 - enemy.size;

  //               if (this.player.lives === 0) {
  //                   this.gameOver();
  //               }

  //           }
  //       }

  //   });
  // }

  _assignControlsToKeys() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'KeyW':
          if (this._checkCollisionEnemy(this.ship.posY-1, this.ship.posX) === false) {
          this.ship.posY -= this.ship.speed;
          }
          break;
        case 'KeyS':
          if (this._checkCollisionEnemy(this.ship.posY+1, this.ship.posX) === false) {
          this.ship.posY += this.ship.speed;
          }
          break;
        case 'KeyD':
          if (this._checkCollisionEnemy(this.ship.posY, this.ship.posX+1) === false) {
          this.ship.posX += this.ship.speed;
          }
          break;
        case 'KeyA':
          if (this._checkCollisionEnemy(this.ship.posY, this.ship.posX-1) === false) {
          this.ship.posX -= this.ship.speed;
          }
          break;
        /*case 'ArrowUp' && 'ArrowRight':
        this.ship.posY--;
        this.ship.posX++;  
          break;*/
        case 'Space':
          this.ship.posX++ * this.ship.speed;
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
    // if (this._checkCollision() === true) {
    //   this.player.removeLives();
    // }
    // if (this.stone.posY > 900) {
    //   this.stone.posY = 0;
    // }
    this._clean();
    this._drawShip();
    this._drawStones();
    this._drawEnemy();
    this._identifyEnemy();
    this._checkCollisionEnemy();
    this._drawShoot();
    // this._checkCollision();
    // this._checkCollisions();
    // this._updatePosition();
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