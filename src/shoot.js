class Shoot {
    constructor(posX, posY) {
        this.lives = 1;
        this.posX = posX;
        this.posY = posY;
        this.speed = 20;
        this.size = 5;
    }
    removeLife() {
        this.lives -= 1;
      }
    move() {
        this.posX = this.posX + this.speed;
    }
}