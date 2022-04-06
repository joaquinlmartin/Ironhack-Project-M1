class Stones {
    constructor(posX = 0, posY = 0, speed = 50) {
        this.posX = posX;
        this.posY = posY;
        this.size = 10;
        this.speed = speed;
        this.width = 10;
        this.height = 10;
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
    // updatePosition() {
    //     this.PosX += this.direction * this.speed;
    // }
    collisionWithShip(ship){
        return(
            this.posX < ship.posX + 20 &&
            this.posX + 10 > ship.posX &&
            this.posY < ship.posY + 20 &&
            this.posY + 10 > ship.posY
        );
    }
}