class Stones {
    constructor(posX = 0, posY = 0, speed = 100) {
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
    _updatePosition() {
        this.PosX += this.direction * this.speed;
      }
    /*isInsideScreen(){
        const stoneRight = this.posX + this.size;
        const screenLeft = this.canvas.width;
        const isInside = stoneRight <  screenLeft;
        return isInside; //return this.x > 0;
    }*/
    /*function getRandomNumber(range) {
        return Math.floor(Math.random() * range);
    }*/
}