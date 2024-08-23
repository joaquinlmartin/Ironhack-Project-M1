class Boost {
    constructor(posX, posY) {
        this.posX = posX = 90;
        this.posY = posY;
    }
    move() {
        this.posX = this.posX - this.speed;
    }
}