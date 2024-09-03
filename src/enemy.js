class Enemy {
    constructor(posX = 0, posY = 0) {
        this.posX = posX;
        this.posY = posY;
        this.speed = 50;
        this.lives = 1;
        this.size = 50;
        this.startMove();
    }
    move() {
        this.posX = this.posX - this.speed;
    }
    startMove() {
        setInterval(() => {
            this.move();
        }, 2000);
    }
    removeLife() {
        this.lives -= 1;
        if (lives === 0) {
          this.posX = -100;
    }}
}