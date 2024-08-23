class Game {
  constructor(options, ctx) {
    this.ctx = options.ctx;
    this.ship = options.ship;
    this.stones = [];
    this.enemy = [];
    this.powerups = [];
    this.shoots = options.shoots;
    this.shoots = [];
    this.boosts = [];
    this.shootsEnemy = [];
    this.score = 0;
    this.scoreText = new Score(ctx, 10, 10);
    this.soundGame = new Audio("./audio/Nemesis.mp3");
    this.soundGameOver = new Audio("./audio/Dark Souls Death.mp3");
    this.soundShoot = new Audio("./audio/Plasma gun fire.mp3");
    this.soundBoost = new Audio("./audio/Elemental magic spell.mp3");
    this.soundPowerup = new Audio("./audio/Power Up Estridente.mp3");
    this.soundEnemyExplosion = new Audio("./audio/Ship Explosion.mp3");
    this.soundStoneExplosion = new Audio("./audio/Rock break.mp3");
  }

  //Draw the figures
  _drawShip() {
    this.ctx.drawImage(shipSprite.sprite, shipSprite.posX, shipSprite.posY, shipSprite.w, shipSprite.h, this.ship.posX, this.ship.posY, 40, 40);
  }
  _drawStones() {
    this.stones.forEach((stone) => {
      this.ctx.drawImage(stonesSprite.sprite, stonesSprite.posX, stonesSprite.posY, stonesSprite.w, stonesSprite.h, stone.posX, stone.posY, 40, 40);
    });
  }
  _drawEnemy() {
    this.enemy.forEach((enemy) => {
      this.ctx.drawImage(enemySprite.sprite, enemySprite.posX, enemySprite.posY, enemySprite.w, enemySprite.h, enemy.posX, enemy.posY, 40, 40);
      this.shootsEnemy.forEach(() => {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(enemy.posX, enemy.posY, -10, -10);
        //this.ctx.drawImage(shootEnemySprite.sprite, shootEnemySprite.sprite.posX, shootEnemySprite.sprite.posY, shootEnemySprite.sprite.w, shootEnemySprite.sprite.h, shootEnemy.posX, shootEnemy.posY, 50, 50);
      });
    });
  }
  _drawShoot() {
    this.shoots.forEach((shoot) => {
      this.ctx.drawImage(shootSprite.sprite, shootSprite.posX, shootSprite.posY, shootSprite.w, shootSprite.h, shoot.posX, shoot.posY, 58, 58);
      shoot.move();
    });
  }
  _drawBoost() {
    this.boosts.forEach((boost) => {
      this.ctx.drawImage(boostSprite.sprite, boostSprite.posX, boostSprite.posY, boostSprite.w, boostSprite.h, boost.posX, boost.posY, 200, 200);
      boost.move();
    });
  }
  _drawPowerups() {
    this.powerups.forEach((pu) => {
      this.ctx.fillStyle = "gold";
      this.ctx.fillRect(pu.posX, pu.posY, 40, 40);
      //this.ctx.drawImage(powerupSprite.sprite, powerupSprite.sprite.posX, powerupSprite.sprite.posY, powerupSprite.sprite.w, powerupSprite.sprite.h, pu.posX, pu.posY, 40, 40);
    });
  }
  /* _drawshootEnemy() {
    this.shootsEnemy.forEach((shootEnemy) => {
      this.ctx.fillStyle= "red";
      this.ctx.fillRect(shootEnemy.posX, shootEnemy.posY, 10, 10);
      //this.ctx.drawImage(shootEnemySprite.sprite, shootEnemySprite.sprite.posX, shootEnemySprite.sprite.posY, shootEnemySprite.sprite.w, shootEnemySprite.sprite.h, shootEnemy.posX, shootEnemy.posY, 50, 50);
    });
  } */
  _drawScore() {
    this.ctx.beginPath();
    this.ctx.font = "30px verdana";
    this.ctx.fillStyle = 'red';
    this.ctx.fillText("Score: " + this.score, this.score.posX, this.score.posY, 80, 320);
    this.ctx.fillText(`Score: ${this.score}` + this.score, this.score.posX, this.score.posY, 138, 1);
    this.ctx.closePath();
  }

  //Generate figures
  _generateStones() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.stones.push(new Stones(getRandomInt(1275, 1280), getRandomInt(20, 700)));
  }
  _generateEnemy() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.enemy.push(new Enemy(getRandomInt(1279, 1280), getRandomInt(20, 700)));
  }
  _generatePowerups() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.powerups.push(new Powerup(getRandomInt(1275, 1280), getRandomInt(20, 700)));
  }
  _generateShootEnemy() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.shootsEnemy.push(new ShootEnemy(getRandomInt(1279, 1280), getRandomInt(20, 700)));
    //this.shootsEnemy.push(new ShootEnemy(this.enemy.posX -20, this.enemy.posY -20));
  }

  //Generate intervals
  _generateStonesInterval() {
    setInterval(() => {
      this._generateStones();
    }, 6000);
  }
  _generateEnemyInterval() {
    setInterval(() => {
      this._generateEnemy();
    }, 7000);
  }
  _generatePowerupsInterval() {
    setInterval(() => {
      this._generatePowerups();
    }, 10000);
  }
  _generateShootEnemyInterval() {
    setInterval(() => {
      this._generateShootEnemy();
    }, 7000);
  }

  //Collisions
  _checkCollisions() {
    this.enemy.forEach((enemies) => {
      if (this.ship.didCollide(enemies)) {
        this.ship.removeLife();
        console.log("lives", this.ship.lives);
        {//Mover el jugador fuera de la pantalla
          this.ship.posX = 275;
          this.ship.posY = 325;
        }
        //Desaparicion del enemigo al colisionar
        enemies.posX = -100;
        this.soundEnemyExplosion.play();
        //añadir explosion de destrucción nave enemiga
      } /* if (this.shoots.didShootCollide(enemies)) {
        this.shoots.removeLife();
        this.shoots.posX = -100;
        //Desaparicion del enemigo al colisionar
        enemies.posX = -100;
        this.soundEnemyExplosion.play();
        //añadir explosion de destrucción nave enemiga
      } */ else {
        this.score++;
      }
    });
    this.stones.forEach((stonies) => {
      if (this.ship.didCollideStones(stonies)) {
        this.ship.removeLife();
        console.log("lives", this.ship.lives);
        {//Mover el jugador fuera de la pantalla 
          this.ship.posX = 275;
          this.ship.posY = 325;
        }
        stonies.posX = -150;
        this.soundStoneExplosion.play();
        //añadir explosion de destrucción de la roca
      } else {
        this.score++;
      }
    });
    this.powerups.forEach((powerupis) => {
      if (this.ship.didPowerup(powerupis)) {
        this.ship.addLife();
        console.log("lives", this.ship.lives);
        //desaparicion del powerup al colisionar.
        powerupis.posX = -200;
        //sonido de coger powerup
        this.soundPowerup.play();
      } else {
        this.score++;
      }
    })
  }
  /* _checkCollisionsShoot() {
    this.shoots.forEach((enemiis) => {
      if (this.enemy.didShootCollide(enemiis)) {
        this.shoots.posX = -25;
        enemiis.posX = -150;
        console.log("Puto colisions shoot funcionando!")
      }
    });
  } */
  _assignControlsToKeys() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'KeyW':
          this.ship.posY -= this.ship.speed;
          break;
        case 'KeyS':
          this.ship.posY += this.ship.speed;
          break;
        case 'KeyA':
          this.ship.posX -= this.ship.speed;
          break;
        case 'KeyD':
          this.ship.posX += this.ship.speed;
          break;
        case 'Space':
          this.ship.posX += this.ship.speed + 20;
          this.boosts.push(new Boost(this.ship.posX - 60, this.ship.posY - 60));
          this.soundBoost.play();
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
    this.ctx.drawImage(canvasSprite.sprite, canvasSprite.posX, canvasSprite.posY, canvasSprite.w, canvasSprite.h, 0, 0, 1280, 720);
  }
  _stopGame() {
    clearInterval(this.interval);
  }
  _playGame() {
    console.log("game replay");
    this._update();
  }
  _updateGameStats() {
    setInterval(() => {
      this.score += 10;
    }, 100);
    // this.livesElement.innerHTML = this.ship.lives;
    // this.scoreElement.innerHTML = this.score;
  }
  _gameOver() {
    let gameover = document.querySelector('#gameover');
    const canvas = document.querySelector('#nemesis');
    canvas.classList.remove('show');
    canvas.classList.add('hide');
    gameover.classList.remove('hide');
    gameover.classList.add('show');
    this.soundGameOver.play();
    this._tryAgain()
  }
  _tryAgain() {
    const tryAgain = document.querySelector('#try-again');
    tryAgain.addEventListener('click', function () {
      document.location.reload();
      // let gameover = document.querySelector('#gameover');
      // gameover.classList.remove('show');
      // gameover.classList.add('hide');
    })
  }
  _createVictory() {
    let win = document.querySelector('#win');
    let canvas = document.querySelector('#nemesis');
    canvas.classList.remove('show');
    canvas.classList.add('hide');
    win.classList.remove('hide');
    win.classList.add('show');
    createVictory();
  }
  _update() {
    this._clean();
    this._drawShip();
    this._drawStones();
    this._drawEnemy();
    this._drawPowerups();
    //this._drawshootEnemy();
    this._drawShoot();
    this._drawBoost();
    this._drawScore();
    this._checkCollisions();
    /* this._checkCollisionsShoot(); */
    this._updateGameStats();
    if (this.ship.lives === 0) {
      this.soundGame.pause();
      this._stopGame();
      this._gameOver(console.log("Estás muerto"));
      this._drawScore();
      this.scoreText.score++;
      this.scoreText.draw();
      return;
    }
    if (this.ship.scores === 1) {
      this.soundGame.pause();
      this._stopGame();
      this._createVictory();
      this._drawScore();
      this.scoreText.score++;
      this.scoreText.draw();
      return;
    }
    window.requestAnimationFrame(this._update.bind(this));
  }
  start() {
    // Save references to the score and lives elements
    // this.livesElement = this.game.querySelector(".lives .value");
    // this.scoreElement = this.gameScreen.querySelector(".score .value");
    // this.soundSplash.stop();
    this.soundGame.play();
    this._assignControlsToKeys(0);
    this._generateStones();
    this._generateStonesInterval();
    this._generateEnemy();
    this._generateEnemyInterval();
    this._generatePowerups();
    this._generatePowerupsInterval();
    this._generateShootEnemy();
    this._generateShootEnemyInterval();
    window.requestAnimationFrame(this._update.bind(this));
  }
}