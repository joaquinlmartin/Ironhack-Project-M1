class Stones {
    constructor(posX, posY, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.size  = 40;
        this.speed = 20;
        this.startMove();
    }
    startMove() {
        setInterval(() => {
            this.move();
            //this.rotate();
        }, 700);
    }
    move() {
        this.posX = this.posX - this.speed;
    }
     //rotate() {
        //this.ctx.translate(posX, posY);
        //this.ctx.rotate(45 * Math.PI / 180);
     //}
}