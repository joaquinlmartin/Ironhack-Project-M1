class Powerups {
    constructor(posX, posY, size) {
        this.posX = posX;
        this.posY = posY;
        this.size = size = 40;
        this.speed = 20;
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