class Stones {
    constructor(posX, posY, lives) {
        this.posX = posX;
        this.posY = posY;
        this.speed = 10;
        this.lives = lives = 1;
        this.degrees = 1/360;
        this.startMove();
    }
    removeLife() {
        this.lives -= 1;
        if (lives === 0) {
            this.stones.dead();
        }
    }
    dead() {
        this.stones.posX = -100;
    }
    startMove() {
        setInterval(() => {
            this.move();
        }, 700);
    }
    move() {
        this.posX = this.posX - this.speed;
    }
}