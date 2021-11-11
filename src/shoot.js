class Shoot {
    constructor(posX = 0, posY = 0, speed = 100) {
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.startMove();   
    }
    move() {
        this.posX = this.posX + this.speed;
    }
    startMove() {
        setInterval(() => {
            this.move();
        }, 1000);
    }
}