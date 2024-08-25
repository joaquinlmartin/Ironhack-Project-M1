class Powerup {
    constructor (posX, posY, speed) {
        this.posX = posX;
        this.posY = posY;
        this.speed = speed = 15;
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