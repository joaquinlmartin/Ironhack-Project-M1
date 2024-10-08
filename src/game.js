class Game {
  constructor(options, ctx) {
    this.ctx = options.ctx;
    this.ship = options.ship;
    this.stones = [];
    this.enemy = [];
    this.powerups = [];
    this.shoots = [];
    this.shoots = this.shoots;
    this.boosts = [];
    this.shootsEnemy = [];
    this.asteroids = [];
    this.score = 0;
    this.lives = this.ship.lives;
    //this.scoreText = new Score(ctx, 10, 10);
    this.soundGame = new Audio("./audio/Nemesis.mp3");
    this.soundGameOver = new Audio("./audio/Dark Souls Death.mp3");
    this.soundVictory = new Audio("./audio/Final Fantasy VII Victory.mp3");
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
      this.shootsEnemy.forEach((shot) => {
      this.ctx.drawImage(shootEnemySprite.sprite, shootEnemySprite.posX, shootEnemySprite.posY, shootEnemySprite.w, shootEnemySprite.h, shot.posX, shot.posY, 50, 50);
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
      this.ctx.drawImage(powerupSprite.sprite, powerupSprite.posX, powerupSprite.posY, powerupSprite.w, powerupSprite.h, pu.posX, pu.posY, 40, 40);
    });
  }
  _drawAsteroids() {
    this.asteroids.forEach((asteoro) => {
      this.ctx.drawImage(asteroidSprite.sprite, asteroidSprite.posX, asteroidSprite.posY, asteroidSprite.w, asteroidSprite.h, asteoro.posX, asteoro.posY, 22, 22);
    });
  }
  /* _drawScore() {
    this.ctx.beginPath();
    this.ctx.font = "30px verdana";
    this.ctx.fillStyle = 'red';
    this.ctx.fillText("Score: " + this.score, this.score.posX, this.score.posY, 80, 320);
    this.ctx.fillText(`Score: ${this.score}` + this.score, this.score.posX, this.score.posY, 138, 1);
    this.ctx.closePath();
  } */
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
    this.shootsEnemy.push(new ShootEnemy(getRandomInt(1279, 1280), getRandomInt(20, 700)));
  }
  _generatePowerups() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.powerups.push(new Powerup(getRandomInt(1275, 1280), getRandomInt(20, 700)));
  }
  _generateAsteroidsDown() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.asteroids.push(new Asteroid(getRandomInt(1279, 1280), getRandomInt(672, 697)));
  }
  _generateAsteroidsUp() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.asteroids.push(new Asteroid(getRandomInt(1279, 1280), getRandomInt(-15, 10)));
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
    }, 1000);
  }
  _generatePowerupsInterval() {
    setInterval(() => {
      this._generatePowerups();
    }, 10000);
  }
  _generateAsteroidsInterval() {
    setInterval(() => {
      this._generateAsteroidsDown();
      this._generateAsteroidsUp();
    }, 1000);
  }
  //Collisions
  _checkCollisions() {
    this.enemy.forEach((enemies) => {
      if (this.ship.didCollide(enemies)) {
        this.ship.removeHpExplosion();
        console.log("hp points", this.ship.hp, "/ 100");
        console.log("lives", this.ship.lives);
        enemies.posX = -100; //Desaparicion del enemigo al colisionar
        this.soundEnemyExplosion.play();
        this.score += 100;
      }
    });
    this.stones.forEach((stonies) => {
      if (this.ship.didCollideStones(stonies)) {
        this.ship.removeHpShoot();
        console.log("hp points", this.ship.hp, "/ 100");
        console.log("lives", this.ship.lives);
        stonies.posX = -150; //desaparicion de la roca al colisionar.
        this.soundStoneExplosion.play();
        this.score += 50;
      }
    });
    this.shootsEnemy.forEach((shooties) => {
      if (this.ship.didCollideStones(shooties)) {
        this.ship.removeHpHit();
        console.log("hp points", this.ship.hp, "/ 100");
        console.log("lives", this.ship.lives);
        shooties.posX = -100; //desaparicion del disparo al colisionar.
        this.soundEnemyExplosion.play();
        this.score += 10;
      }
    });
    this.asteroids.forEach((ars) => {
      if (this.ship.didCollideAsteroids(ars)) {
        this.ship.removeLife();
        console.log("hp points", this.ship.hp, "/ 100");
        console.log("lives", this.ship.lives);
        this.soundStoneExplosion.play();
      }
    });
    this.powerups.forEach((powerupis) => {
      if (this.ship.didPowerup(powerupis)) {
        this.ship.addLife();
        console.log("lives", this.ship.lives);
        powerupis.posX = -200; //desaparicion del powerup al colisionar.
        this.score += 25;
        this.soundPowerup.play(); //sonido de coger powerup
      }
    })
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
      this.score += 0;
      this.lives += 0;
    }, 1000);
      this.scoreElement.innerHTML = this.score;
      this.livesElement.innerHTML = this.lives;
  }
  _gameOver() {
    let gameover = document.querySelector('#gameover');
    const canvas = document.querySelector('#nemesis');
    canvas.classList.remove('show');
    canvas.classList.add('hide');
    gameover.classList.remove('hide');
    gameover.classList.add('show');
    this.soundGameOver.play();
    this._tryAgain();
  }
  _tryAgain() {
    const tryAgain = document.querySelector('#try-again');
    tryAgain.addEventListener('click', function () {
      document.location.reload();
      if (id === 'gameover') {
        console.log("estoy en gameover")
        let gameover = document.querySelector('#gameover');
        const canvas = document.querySelector('#nemesis');
        gameover.classList.remove('show');
        gameover.classList.add('hide');
        canvas.classList.remove('hide');
        canvas.classList.add('show');
        nemesisGame();
      }
      if (id === 'win') {
        console.log("estoy en try again")
        let win = document.querySelector('#win');
        const canvas = document.querySelector('#nemesis');
        win.classList.remove('show');
        win.classList.add('hide');
        canvas.classList.remove('hide');
        canvas.classList.add('show');
        nemesisGame();
      }
    });
  }
  _createVictory() {
    let win = document.querySelector('#win');
    const canvas = document.querySelector('#nemesis');
    canvas.classList.remove('show');
    canvas.classList.add('hide');
    win.classList.remove('hide');
    win.classList.add('show');
    this.soundVictory.play();
    this._tryAgain();
  }
  _update() {
    this._clean();
    this._drawShip();
    this._drawStones();
    this._drawEnemy();
    this._drawPowerups();
    this._drawShoot();
    this._drawBoost();
    this._drawAsteroids();
    //this._drawScore();
    this._checkCollisions();
    this._updateGameStats();
    if (this.ship.lives === 0) {
      this.soundGame.pause();
      this._stopGame();
      this._gameOver(console.log("Estás muerto"));
      //this._drawScore();
      //this.scoreText.score++;
      //this.scoreText.draw();
      return;
    }
    if (this.score >= 1000) {
      this.soundGame.pause();
      this._stopGame();
      this._createVictory(console.log("Bienvenido al mundo de Daniel"));
      //this._drawScore();
      //this.scoreText.score++;
      //this.scoreText.draw();
      return;
    }
    window.requestAnimationFrame(this._update.bind(this));
  }
  start() {
    // Save references to the score and lives elements
    this.livesElement = document.getElementById('lives');
    this.scoreElement = document.getElementById('scores');
    soundSplash.pause(); // soundSplash.pause() => Parece raro pero está bien, funciona, de las demás formas no.
    this.soundGame.play();
    this._assignControlsToKeys(0);
    this._generateStones();
    this._generateStonesInterval();
    this._generateEnemy();
    this._generateEnemyInterval();
    this._generatePowerups();
    this._generatePowerupsInterval();
    this._generateAsteroidsDown();
    this._generateAsteroidsUp();
    this._generateAsteroidsInterval();
    window.requestAnimationFrame(this._update.bind(this));
  }
}