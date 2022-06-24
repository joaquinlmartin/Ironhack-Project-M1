class Powerup {
    constructor (posX = 0, posY = 0, speed = 50) {
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
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
}