class Enemy {
    constructor(posX = 0, posY = 0) {
        this.shoots = [];
        this.posX = posX;
        this.posY = posY;
        this.speed = 50;
        this.lives = 1;
        this.startMove();
    }
    move() {
        this.posX = this.posX - this.speed;
    }
    shoot() {
        this.shoots.posX = this.shoots.posX - this.speed + 20;
    }
    removeLife() {
        this.lives -= 1;
        if (lives === 0) {
          this.Enemy.dead();
    }}
      dead() {
        this.Enemy.posX = -150;
    }
    drawShoot() {
        this.shoots.forEach((shoot) => {
          this.ctx.drawImage(shootSprite.sprite, shootSprite.posX, shootSprite.posY, shootSprite.w, shootSprite.h, shoot.posX, shoot.posY, 55, 55);
        }); 
    }
    startMove() {
        setInterval(() => {
            this.move();
            this.shoot();
        }, 2000);
    }
}