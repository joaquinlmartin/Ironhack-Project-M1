class Stones {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.speed = 10;
        //this.degrees = 0;
        this.startMove();
        /* this.dead() = dead; */
    }
    startMove() {
        setInterval(() => {
            this.move();
        }, 700);
    }
    move() {
        this.posX = this.posX - this.speed;
    }
    /* dead() {
        this.stones.posX = -100;
    } */
    /*rotate() {
        this.stones.posX ?
    }
     advance() {
        this.startMove();
        this.rotate(45 * Math.PI / 180);
     }*/
}