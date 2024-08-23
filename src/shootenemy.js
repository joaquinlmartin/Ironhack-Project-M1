class ShootEnemy {
    constructor (posX = 0, posY = 0) {
        this.posX = posX;
        this.posY = posY;
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
        }, 500);
    }
}