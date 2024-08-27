class Asteroid {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.speed = 10;
        this.startMove();
    }
    move() {
        this.posX = this.posX - this.speed;
    }
    startMove() {
        setInterval(() => {
            this.move();
        }, 700);
    }
}