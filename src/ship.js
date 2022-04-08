class Ship {
  constructor() {
    this.lives = 3;
    this.posX = 275;
    this.posY = 325;
    this.speed = 20;
    this.image = new Image();
    this.image.src = "./images/ew-free-sprites-blue-spaceship-sprayt-kosmicheskiy-korabl-11563255232nrdoiuuizj.png";
  }
  removeLife() {
    console.log("lives bajando")
    this.lives -= 1;
  }
  didCollide(enemy) {
    //Seleccionamos los 4 laterales del jugador
    const playerLeft = this.posX;
    const playerRight = this.posX + 20;
    const playerTop = this.posY;
    const playerBottom = this.posY + 20;

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
}