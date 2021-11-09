class Enemy {
    constructor(posX = 0, posY = 0, speed = 75) {
        this.posX = posX;
        this.posY = posY;
        this.size = 30;
        this.speed = speed;
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
    /*this.space = space;
    this.ship = ship;
    this.height = 30;
    this.width = 30;
    this.Boss = document.createElement('img');
    this.Boss.src = '';
    this.Boss.className = 'big bad ship';
    this.step = Math.floor(Math.random() * 2);
    this.Boss.style.right = '0px';
    this.Boss.style.top = `${Math.floor(Math.random() * space.offsetHeight)}px`;
    this.Boss.appendChild(this.Boss);
    this.move();*/
}