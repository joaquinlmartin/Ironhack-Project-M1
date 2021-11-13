class Enemy {
    constructor(posX = 0, posY = 0, speed = 100, lives = 1) {
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.lives = lives;
        // this.enemy = document.createElement('img');
        // this.enemy.src = "/images/ew-free-sprites-blue-spaceship-sprayt-kosmicheskiy-korabl-11563255232nrdoiuuizj.png";
        this.startMove();
    }
    move() {
        this.posX = this.posX - this.speed;
    }
    startMove() {
        setInterval(() => {
            this.move();
        }, 2000);
    }
}