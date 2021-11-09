class Stones {
    constructor(posX = 0, posY = 0, speed = 30) {
        this.posX = posX;
        this.posY = posY;
        this.size = 10;
        this.speed = speed;
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