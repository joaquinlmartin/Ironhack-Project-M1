class Game {
  constructor(options, ctx, gameScreen, speed) {
    this.gameScreen = gameScreen;
    this.gameIsOver = false;
    this.ctx = options.ctx;
    this.enemy = [];
    this.stones = [];
    this.shoots = [];
    this.shootsEnemy = [];
    this.ship = options.ship;
    this.shoot = options.shoot;
    this.canvas = options.canvas;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
    this.posX = options.posX;
    this.posY = options.posY;
    this.player = options.player;
    this.speed = speed;
    this.scoreText = new Score(ctx, 10, 10);
    this.soundGame = new Audio ("./audio/Terra’s Theme (Final Fantasy VI) (320 kbps).ogx");
    this.soundShoot = new Audio ("./audio/audio_diablo_2_skull_gem_sound.mp3");
    // this.sound = new Audio("./audio/Cargo Plane Cabin Ambiance-SoundBible.com-589803489.mp3");
  }
  //Draw the figures ship, enemy, stones and shoot
  _drawShip() {
    this.ctx.drawImage(shipSprite.sprite, shipSprite.posX, shipSprite.posY, shipSprite.w, shipSprite.h, this.ship.posX, this.ship.posY, 20, 20);
  }
  _drawStones() {
    this.stones.forEach((stone) => {
      this.ctx.drawImage(stonesSprite.sprite, stonesSprite.posX, stonesSprite.posY, stonesSprite.w, stonesSprite.h,stone.posX, stone.posY, 40, 40);
    })
  }
  _drawEnemy() {
    this.enemy.forEach((enemy) => {
      this.ctx.drawImage(enemySprite.sprite, enemySprite.posX, enemySprite.posY, enemySprite.w, enemySprite.h, enemy.posX, enemy.posY, 25, 25);
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

        //Mover el enemigo fuera de la pantalla
            enemies.posX = -25;
            // this.ship.posX = -20;

        if (this.ship.lives === 0) {
          // this.ship.posX = -20;
          // this.gameOver();
          clearInterval(this.generateStonesInterval);
          clearInterval(this.generateEnemyInterval);
          this._stopGame();
        }
      }
    });
    // this.enemy.forEach((enemiis) => {
    //   if (this.shoots.didShootCollide(enemiis)) {
    //     console.log("Puto colisions shoot funcionando!")
    //     // this.ship.removeLife();
    //     // console.log("lives", this.ship.lives);

    //     //Mover el enemigo fuera de la pantalla
    //         enemies.posX = -25;
    //         // this.ship.posX = -20;

    //     // if (this.ship.lives === 0) {
    //     //   this.ship.posX = -20;
    //     //   // this.gameOver();
    //     // }
    //   }
    // });
  }
  _checkCollisionss() {
    this.stones.forEach((stonies) => {
      if (this.ship.didCollides(stonies)) {
        this.ship.removeLife();
        console.log("lives", this.ship.lives);

        //Mover el enemigo fuera de la pantalla
            stonies.posX = -40;
            // this.ship.posX = -20;

        if (this.ship.lives === 0) {
          // this.ship.posX = -20;
          // this.gameOver();
          clearInterval(this.generateStonesInterval);
          this._stopGame();
        }
      }
    });
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
          this.ship.posX += this.ship.speed + 20;
          this.ctx.drawImage(boostSprite.sprite, boostSprite.posX, boostSprite.posY, boostSprite.w, boostSprite.h, this.ship.posX - 30, this.ship.posY, 20, 20)
          break;
        case 'Enter':
          this.shoots.push(new Shoot(this.ship.posX -20, this.ship.posY -20));
          this.soundShoot.play();
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
  _stopGame(){
    console.log("gameover");
    clearInterval(this.interval);
    this.enemy.forEach((enemies) => clearInterval(enemies.interval));
    this.stones.forEach((stoness) => clearInterval(stoness.interval));
    this.shoots.forEach((shootss) => clearInterval(shootss.interval));
    document.getElementById("gameover").style = "display: block;";
    document.getElementById("gameover").style = "display: absolute; position: absolute; z-index: 5px';"; 
}
   _updateGameStats() {
     this.score += 10;
    //  this.livesElement.innerHTML = this.ship.lives;
    //  this.scoreElement.innerHTML = this.score;
   }
  _update() {
    this._clean();
    this._drawShip();
    this._drawStones();
    this._drawEnemy();
    this._drawShoot();
    this._drawshootEnemy();
    this._checkCollisions();
    this._checkCollisionss();
    this._updateGameStats();
    if (this.ship.lives === 0) {
      // this.ship.posX = -20;
      // this.gameOver();
      this.soundGame.pause();
      this._stopGame();
      this.scoreText.score++;
      this.scoreText.draw();
      return;
    }
    window.requestAnimationFrame(this._update.bind(this));
  }
  start() {
    // Save references to the score and lives elements
    // this.livesElement = this.gameScreen.querySelector(".lives .value");
    // this.scoreElement = this.gameScreen.querySelector(".score .value");
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