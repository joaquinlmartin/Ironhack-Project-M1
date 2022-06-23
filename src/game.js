class Game {
  constructor(options, ctx, gameScreen, gameover, speed, callback) {
    // this.gameScreen = gameScreen;
    this.ctx = options.ctx;
    this.enemy = [];
    this.stones = [];
    this.shoots = [];
    // this.shoots = options.shoots;
    this.shootsEnemy = [];
    // this.printGameOver = printGameOver;
    // this.gameover = gameover;
    this.ship = options.ship;
    this.shoot = options.shoot;
    this.canvas = options.canvas;
    this.score = 0;
    // this.livesElement = undefined;
    // this.scoreElement = undefined;
    this.posX = options.posX;
    this.posY = options.posY;
    this.player = options.player;
    this.speed = speed;
    this.gameover = callback;
    this.scoreText = new Score(ctx, 10, 10);
    this.soundGame = new Audio("./audio/Terra’s Theme (Final Fantasy VI).mp3");
    this.soundShoot = new Audio("./audio/Diablo 2 Skull.mp3");
    this.soundBoost = new Audio("./audio/Power Up Estridente.mp3");
    // this.sound = new Audio("./audio/Cargo Plane Cabin Ambiance-SoundBible.com-589803489.mp3");
  }
  //Draw the figures ship, enemy, stones and shoot
  _drawShip() {
    this.ctx.drawImage(shipSprite.sprite, shipSprite.posX, shipSprite.posY, shipSprite.w, shipSprite.h, this.ship.posX, this.ship.posY, 20, 20);
  }
  _drawStones() {
    this.stones.forEach((stone) => {
      this.ctx.drawImage(stonesSprite.sprite, stonesSprite.posX, stonesSprite.posY, stonesSprite.w, stonesSprite.h, stone.posX, stone.posY, 40, 40);
      // this.ctx.arc(160, 200, 50, 0, 2 * Math.PI);
      // this.ctx.save();
      // this.ctx.translate(200, 80);
      // // this.ctx.rotate((Math.PI / 180) * 25);
      // this.ctx.translate(-200, -80);
    })
  }
  _drawEnemy() {
    this.enemy.forEach((enemy) => {
      this.ctx.drawImage(enemySprite.sprite, enemySprite.posX, enemySprite.posY, enemySprite.w, enemySprite.h, enemy.posX, enemy.posY, 50, 50);
    })
  }
  _drawShoot() {
    this.shoots.forEach((shoot) => {
      this.ctx.drawImage(shootSprite.sprite, shootSprite.posX, shootSprite.posY, shootSprite.w, shootSprite.h, shoot.posX, shoot.posY, 55, 55);
      shoot.move();
      shoot.goAttack();
    });
  }
  _drawshootEnemy() {
    this.shootsEnemy.forEach((shootEnemy) => {
      this.ctx.drawImage(shootEnemySprite.sprite, shootEnemySprite.sprite.posX, shootEnemySprite.sprite.posY, shootEnemySprite.sprite.w, shootEnemySprite.sprite.h, shootEnemy.posX, shootEnemy.posY, 55, 55);
    });
  }
  _drawScore() {
    this.ctx.beginPath();
    this.ctx.font = "30px verdana";
    this.ctx.fillStyle = 'white';
    this.ctx.fillText("Score: " + this.score, this.score.posX, this.score.posY, 5, 30);
    this.ctx.closePath();
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
  _generateShootEnemy() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.shootsEnemy.push(new shootEnemy(getRandomInt(0, 1280), getRandomInt(20, 600)));
    // this.shootsEnemy.push(new shootEnemy(this.enemy.posX -20, this.enemy.posY -20));
  }
  _generateShootEnemyInterval() {
    setInterval(() => {
      this._generateShootEnemy();
    }, 2000);
  }
  //Collisions
  _checkCollisions() {
    this.enemy.forEach((enemies) => {
      if (this.ship.didCollide(enemies)) {
        this.ship.removeLife();
        console.log("lives", this.ship.lives);

        //Mover el enemigo y el jugador fuera de la pantalla
        this.enemy.posX = -25;
        this.ship.posX = -20;

        if (this.ship.lives === 0) {
          // this.ship.posX = -200;
          // this.gameOver();
          clearInterval(this.generateStonesInterval);
          clearInterval(this.generateEnemyInterval);
          this._stopGame();
        }
      }
    });
  }
  _checkCollisionsStones() {
    this.stones.forEach((stonies) => {
      if (this.ship.didCollides(stonies)) {
        this.ship.removeLife();
        console.log("lives", this.ship.lives);

        //Mover el enemigo fuera de la pantalla
        stonies.posX = -40;
        // this.ship.posX = -20;

        // if (this.ship.lives === 0) {
        //   // this._stopGame();
        //   // this.ship.posX = -20;
        //   // this.gameOver();
        //   // clearInterval(this.generateStonesInterval);
        // }
      }
    });
  }
  // _checkCollisionsShoot() {
  //   this.enemy.forEach((enemiis) => {
  //     if (this.shoots.didShootCollide(enemiis)) {
  //       this.shoots.removeLife();
  //       console.log("Puto colisions shoot funcionando!")

  //       //Mover el enemigo fuera de la pantalla
  //           enemies.posX = -25;

  //       // if (this.ship.lives === 0) {
  //       //   this.ship.posX = -20;
  //       //   // this.gameOver();
  //       // }
  //     }
  //   });
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
          this.soundBoost.play();
          // this.drawBoost();
          break;
        case 'Enter':
          this.shoots.push(new Shoot(this.ship.posX - 20, this.ship.posY - 20));
          this.soundShoot.play();
          break;
        default:
          break;
      }
    });
  }
  _clean() {
    this.ctx.fillStyle = 'black';
    this.ctx.drawImage(canvasSprite.sprite, canvasSprite.posX, canvasSprite.posY, canvasSprite.w, canvasSprite.h, 0, 0, 1280, 720);
  }
  _stopGame() {
    console.log("game stopped");
    clearInterval(this.interval);
    // this.enemy.forEach((enemies) => clearInterval(enemies.interval));
    // this.stones.forEach((stoness) => clearInterval(stoness.interval));
    // this.shoots.forEach((shootss) => clearInterval(shootss.interval));
  }
  _updateGameStats() {
    this.score += 10;
    //  this.livesElement.innerHTML = this.ship.lives;
    //  this.scoreElement.innerHTML = this.score;
  }
  //    _gameover() {
  //     // document.getElementById("gameover").style = "show; display: block;";
  //     // document.getElementById("gameover").style = "position: absolute;";
  // }

  _update() {
    this._clean();
    this._drawShip();
    this._drawStones();
    this._drawEnemy();
    this._drawShoot();
    this._drawshootEnemy();
    this._drawScore();
    this._checkCollisions();
    this._checkCollisionsStones();
    // this._checkCollisionsShoot();
    this._updateGameStats();
    if (this.ship.lives === 0) {
      // this.ship.posX = -20;
      this.soundGame.pause();
      this._stopGame();
      // this._gameover();
      // this.printGameOver();
      // this._drawScore();
      // this.scoreText.score++;
      // this.scoreText.draw();
      return;
    }
    window.requestAnimationFrame(this._update.bind(this));
  }
  start() {
    // Save references to the score and lives elements
    // this.livesElement = this.gameScreen.querySelector(".lives .value");
    // this.scoreElement = this.gameScreen.querySelector(".score .value");
    // this.soundSplash.stop();
    this.soundGame.play();
    this._assignControlsToKeys(0);
    this._generateStones();
    this._generateStonesInterval();
    this._generateEnemy();
    this._generateEnemyInterval();
    this._generateShootEnemy();
    this._generateShootEnemyInterval();
    window.requestAnimationFrame(this._update.bind(this));
  }
}