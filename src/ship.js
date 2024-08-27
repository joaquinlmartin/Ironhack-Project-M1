class Ship {
  constructor() {
    this.lives = 10;
    this.hp = 100;
    this.posX = 275;
    this.posY = 325;
    this.speed = 20;
    this.size = 40;
    this.scores = 0;
  }
  removeHpExplosion() {
    this.explosion = this.hp -= 50;
    if (this.hp === 0) {
      this.removeLife();
      this.posX = 275;
      this.posY = 325;
      console.log("Has perdido una vida flipao, ojo")
      this.hp = 100;
    } else {
      console.log("Aún estás vivo jodío")
    }
  }
  removeHpShoot() {
    this.shoot = this.hp -= 25;
    if (this.hp === 0) {
      this.removeLife();
      this.posX = 275;
      this.posY = 325;
      console.log("Has perdido una vida flipao, ojo")
      this.hp = 100;
    } else {
      console.log("Aún estás vivo jodío")
    }
  }
  removeHpHit() {
    this.hit = this.hp -= 10;
    if (this.hp === 0) {
      this.removeLife();
      this.posX = 275;
      this.posY = 325;
      console.log("Has perdido una vida flipao, ojo")
      this.hp = 100;
    } else {
      console.log("Te han dado pero aún estás vivo, jodío")
    }
  }
  removeLife() {
    this.lives -= 1;
    //this.livesElement.innerHTML -= 1;
  }
  addLife() {
    this.lives += 1;
    //this.livesElement.innerHTML += 1;
  }
  didCollide(enemy) {
    //Seleccionamos los 4 laterales del jugador
    const playerLeft = this.posX;
    const playerRight = this.posX + this.size;
    const playerTop = this.posY;
    const playerBottom = this.posY + this.size;

    //Seleccionamos los 4 laterales del enemigo
    const enemyLeft = enemy.posX;
    const enemyRight = enemy.posX + 40;
    const enemyTop = enemy.posY;
    const enemyBottom = enemy.posY + 40;

    //Comprobamos si el enemigo ha entrado dentro del jugador por cualquiera de los 4 costados
    const crossLeft = enemyLeft <= playerRight && enemyLeft >= playerLeft;
    const crossRight = enemyRight >= playerLeft && enemyRight <= playerRight;
    const crossBottom = enemyBottom >= playerTop && enemyBottom <= playerBottom;
    const crossTop = enemyTop <= playerBottom && enemyTop >= playerTop;

    //Solo cuando 1 condición de verticalidad y 1 de horizontalidad se cumplen, podemos considerar que nnuestros cuadrados han  colisionado
    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }
  didCollideStones(stones) {
    //Seleccionamos los 4 laterales del jugador
    const playerLeft = this.posX;
    const playerRight = this.posX + this.size;
    const playerTop = this.posY;
    const playerBottom = this.posY + this.size;

    //Seleccionamos los 4 laterales del obstáculo
    const stonesLeft = stones.posX;
    const stonesRight = stones.posX + 40;
    const stonesTop = stones.posY;
    const stonesBottom = stones.posY + 40;

    //Comprobamos si el enemigo ha entrado dentro del jugador por cualquiera de los 4 costados

    const crossLeftStone = stonesLeft <= playerRight && stonesLeft >= playerLeft;
    const crossRightStone = stonesRight >= playerLeft && stonesRight <= playerRight;
    const crossBottomStone = stonesBottom >= playerTop && stonesBottom <= playerBottom;
    const crossTopStone = stonesTop <= playerBottom && stonesTop >= playerTop;

    //Solo cuando 1 condición de verticalidad y 1 de horizontalidad se cumplen, podemos considerar que nnuestros cuadrados han  colisionado
    if ((crossLeftStone || crossRightStone) && (crossTopStone || crossBottomStone)) {
      return true;
    } else {
      return false;
    }
  }
  didCollideShoot(shootenemy) {
    //Seleccionamos los 4 laterales del jugador
    const playerLeft = this.posX;
    const playerRight = this.posX + this.size;
    const playerTop = this.posY;
    const playerBottom = this.posY + this.size;

    //Seleccionamos los 4 laterales del enemigo
    const shootenemyLeft = shootenemy.posX;
    const shootenemyRight = shootenemy.posX + 40;
    const shootenemyTop = shootenemy.posY;
    const shootenemyBottom = shootenemy.posY + 40;

    //Comprobamos si el enemigo ha entrado dentro del jugador por cualquiera de los 4 costados
    const crossLeft = shootenemyLeft <= playerRight && shootenemyLeft >= playerLeft;
    const crossRight = shootenemyRight >= playerLeft && shootenemyRight <= playerRight;
    const crossBottom = shootenemyBottom >= playerTop && shootenemyBottom <= playerBottom;
    const crossTop = shootenemyTop <= playerBottom && shootenemyTop >= playerTop;

    //Solo cuando 1 condición de verticalidad y 1 de horizontalidad se cumplen, podemos considerar que nnuestros cuadrados han  colisionado
    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }
 didPowerup(powerup) {
  //Seleccionamos los 4 laterales del jugador
  const playerLeft = this.posX;
  const playerRight = this.posX + this.size;
  const playerTop = this.posY;
  const playerBottom = this.posY + this.size;

  //Seleccionamos los 4 laterales del enemigo
  const powerupLeft = powerup.posX;
  const powerupRight = powerup.posX + 40;
  const powerupTop = powerup.posY;
  const powerupBottom = powerup.posY + 40;

  //Comprobamos si el enemigo ha entrado dentro del jugador por cualquiera de los 4 costados
  const crossLeft = powerupLeft <= playerRight && powerupLeft >= playerLeft;
  const crossRight = powerupRight >= playerLeft && powerupRight <= playerRight;
  const crossBottom = powerupBottom >= playerTop && powerupBottom <= playerBottom;
  const crossTop = powerupTop <= playerBottom && powerupTop >= playerTop;

  //Solo cuando 1 condición de verticalidad y 1 de horizontalidad se cumplen, podemos considerar que nnuestros cuadrados han  colisionado
  if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
    return true;
  } else {
    return false;
  }
}
}