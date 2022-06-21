class Stones {
    constructor(posX, posY, size) {
        this.posX = posX;
        this.posY = posY;
        this.size = size = 40;
        this.speed = 20;
        this.startMove();
    }
    startMove() {
        setInterval(() => {
            this.move();
            // this.rotate();
        }, 700);
    }
    move() {
        this.posX = this.posX - this.speed;
    }
    // rotate() {
    //     this.posX + this.posY == this.posX & this.posY - this.speed;
    // }
}