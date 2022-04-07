class Game {
  constructor(options, ctx, speed) {
    // this.gameScreen = gameScreen;
    // this.gameIsOver = false;
    this.ctx = options.ctx;
    this.enemy = [];
    this.stones = [];
    this.shoots = [];
    this.ship = options.ship;
    this.canvas = options.canvas;
    this.score = 0;
    // this.livesElement = undefined;
    // this.scoreElement = undefined;
    this.posX = options.posX;
    this.posY = options.posY;
    this.player = options.player;
    this.speed = speed;
  }
  //Draw the figures ship, enemy, stones and shoot
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
      this.shoots.forEach((shoot) => {
        this.ctx.fillStyle = 'silver';
        this.ctx.fillRect(shoot.posX, shoot.posY, 5, 5);
        shoot.move();
        shoot.goAttack();
      }); 
  }
  //Generate figures
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
  _checkCollisions() {
    this.enemy.forEach((enemies) => {
      if (this.ship.didCollide(enemies)) {
        console.log("Puto colisions funcionando!")
        // this.ship.removeLife();
        // console.log("lives", this.ship.lives);

        //Mover el enemigo fuera de la pantalla
            enemies.posX = -25;

        // if (this.ship.lives === 0) {
        //   this.gameOver();
        // }
      }
    });
  }
//  _gameOver() {
//   this.gameIsOver = true;
//   endGame(this.score);
//  }
//  _updateGameStats() {
//    this.score += 10;
//    this.livesElement.innerHTML = this.ship.lives;
//    this.scoreElement.innerHTML = this.score;
//  }
//   _CheckColision() {
//     this.stones.forEach((obstacle) => {
//     if(obstacle.collisionWithShip(this.stones)) {
//       console.log("colision");
//     }
//   })
// }
  // _checkCollision() {
  //       if (
  //           this.ship.posX <= this.stones.posX + 10 &&
  //           this.ship.posX + 20 >= this.stones.posX &&
  //           this.ship.posY <= this.stones.posY + 10 &&
  //           this.ship.posY + 20 >= this.stones.posY
  //       ) { 
  //         return true;
  //       }  else {
  //         return false;
  //       }
  //   console.log("colision working");
  // }
  // _checkCollision() {
  //   for (let i = 0; i < this.stones.length; i++) {
  //       if (
  //           this.ship.posX <= this.stones[i].posX + this.stones[i].width &&
  //           this.ship.posX + this.ship.width >= this.stones[i].posX &&
  //           this.ship.posY <= this.stones[i].posY + this.stones[i].height &&
  //           this.ship.height + this.ship.posY >= this.stones[i].posY
  //       ) {
  //           clearInterval(this.generateStonesInterval);
  //           clearInterval(this.drawShip);
  //           // clear interval de puntos
  //           if (this._checkCollision = true) {
  //           console.log("hay colision");
  //           }
  //       } 
  //   }
  // }
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
          this.ship.posX += this.ship.speed + 20;
          break;
        case 'Enter':
          this.shoots.push(new Shoot(this.ship.posX +8, this.ship.posY +8));
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
    // if (this._CheckColision() === true) {
    //   this._clean();
    //   console.log("checkcol ocurrio")
    // }
    this._clean();
    this._drawShip();
    this._drawStones();
    this._drawEnemy();
    this._drawShoot();

    // Check if the player collision with anything
    this._checkCollisions();
    // this._CheckColision();
    window.requestAnimationFrame(this._update.bind(this));
  }
  start() {
    // Save references to the score and lives elements
    // this.livesElement = this.gameScreen.querySelector(".lives .value");
    // this.scoreElement = this.gameScreen.querySelector(".score .value");

    //Controls of the game
    this._assignControlsToKeys();

    this._generateStones();
    this._generateStonesInterval();
    this._generateEnemy();
    this._generateEnemyInterval();
    window.requestAnimationFrame(this._update.bind(this));
  }
}