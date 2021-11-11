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
    this.player = null;
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
      this.ctx.fillRect(enemy.posX, enemy.posY, 30, 30);
    })
  }
  _drawShoot() {
    this.shoot.forEach((shoot) => {
      this.ctx.fillStyle = 'silver';
      this.ctx.fillRect(shoot.posX, shoot.posY, 5, 5);
    })
  }
  _generateStones() {
    this.stones.push(new Stones(1280, 200));
  }

  _generateEnemy() {
    this.enemy.push(new Enemy(1280, 600));
  }

  _generateShoot() {
    this.shoot.push(new Shoot(0, 500));
  }
  // _updatePosition() {
  //   this.PosX += this.direction * this.speed;
  //   this.PosY += this.direction * this.speed;
  // }

  // _loopStones = () => {
  //   if (this.stones.length < 10) {
  //     if (Math.random() > 0.90) {
  //       const randomX = Math.floor((this.fillRect(stones.posX, this.stones.PosY, 10, 10)) * Math.random());
  //       const newStones = new Stones(10, 10, "N");
  //       this.stones.push(this.stones);
  //     }
  //   }
  //   this.stones = this.stones.filter((stones) => {
  //     stones._updatePosition();
  //     return stone.isInsideScreen();
  //   });
  // }

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
    this._generateEnemy();
    this._generateStones();
    this._checkCollisions();
    // this._updatePosition();
    window.requestAnimationFrame(this._update.bind(this));
  }

  _assignControlsToKeys() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowUp':
          this.ship.posY -= this.ship.speed;
          break;
        case 'ArrowDown':
          this.ship.posY += this.ship.speed;
          break;
        case 'ArrowRight':
          this.ship.posX += this.ship.speed;
          break;
        case 'ArrowLeft':
          this.ship.posX -= this.ship.speed;
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
//   _Shot( x, y, array, img) {
//     this.posX = x;
//     this.posY = y;
//     this.image = img;
//     this.speed = shotSpeed;
//     this.identifier = 0;
//     this.add = function () {
//         array.push(this);
//     };
//     this.deleteShot = function (idendificador) {
//         arrayRemove(array, idendificador);
//     };
// }
  _checkCollisions() {
  this.enemy.forEach((enemy) => {
      if (enemy.type === "muerte") {
          if (this.player.didCollide(enemy)) {
              this.player.removeLives();


            
              enemy.posX = 0 - enemy.size;

              if (this.player.lives === 0) {
                  this.gameOver();
              }

          }
      }
     
  });
}
/*function PlayerShot (x, y) {
    Object.getPrototypeOf(PlayerShot.prototype).constructor.call(this, x, y, playerShotsBuffer, playerShotImage);
    this.isHittingEvil = function() {
        return (!evil.dead && this.posX >= evil.posX && this.posX <= (evil.posX + evil.image.width) &&
            this.posY >= evil.posY && this.posY <= (evil.posY + evil.image.height));
    };
}

PlayerShot.prototype = Object.create(Shot.prototype);
PlayerShot.prototype.constructor = PlayerShot;

function EvilShot (x, y) {
    Object.getPrototypeOf(EvilShot.prototype).constructor.call(this, x, y, evilShotsBuffer, evilShotImage);
    this.isHittingPlayer = function() {
        return (this.posX >= player.posX && this.posX <= (player.posX + player.width)
            && this.posY >= player.posY && this.posY <= (player.posY + player.height));
    };
}

EvilShot.prototype = Object.create(Shot.prototype);
EvilShot.prototype.constructor = EvilShot;
*/

  start() {
    this._assignControlsToKeys();
    this._generateShoot();
    /*this._loopStones();*/
    window.requestAnimationFrame(this._update.bind(this));
  }
}