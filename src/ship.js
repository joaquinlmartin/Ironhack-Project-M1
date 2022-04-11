class Ship {
  constructor() {
    this.lives = 1;
    this.posX = 275;
    this.posY = 325;
    this.speed = 20;
    this.size = 20;
  }
  removeLife() {
    this.lives -= 1;
  }
  didCollide(enemy) {
    //Seleccionamos los 4 laterales del jugador
    const playerLeft = this.posX;
    const playerRight = this.posX + this.size;
    const playerTop = this.posY;
    const playerBottom = this.posY + this.size;

    //Seleccionamos los 4 laterales del enemigo
    const enemyLeft = enemy.posX;
    const enemyRight = enemy.posX + 25;
    const enemyTop = enemy.posY;
    const enemyBottom = enemy.posY + 25;

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
  didCollides(stones) {
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
    if ((crossLeftStone || crossRightStone) && (crossBottomStone || crossTopStone)) {
      return true;
    } else {
      return false;
    }
  }
}