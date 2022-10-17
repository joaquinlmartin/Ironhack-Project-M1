class Powerups {
    constructor (posX, posY, speed = 30) {
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
        }, 1000);
    }
}