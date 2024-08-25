class Enemy {
    constructor(posX = 0, posY = 0) {
        this.posX = posX;
        this.posY = posY;
        this.disparos = [];
        this.speed = 50;
        this.lives = 1;
        this.startMove();
    }
    move() {
        this.posX = this.posX - this.speed;
    }
    startMove() {
        setInterval(() => {
            this.move();
            this.disparar();
        }, 2000);
    }
    removeLife() {
        this.lives -= 1;
        if (lives === 0) {
          this.posX = -100;
    }}
    disparar() {
        this.disparos.forEach((shot) => {
            this.shot.posX = this.shot.posX - this.shot.speed;
            this.ctx.fillStyle = "red"; 
            this.ctx.fillRect(shot.posX, shot.posY, 40, 40);
          });
    }
}