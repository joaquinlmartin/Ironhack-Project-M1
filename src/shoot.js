class Shoot {
    constructor(posX, posY, speed = 100) {
        this.posX = 275;
        this.posY = 325;
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.move();
        this.goAttack();
    }
    move() {
        this.posX = this.posX + this.speed;
    }
    goAttack(){
        const id = setInterval(() => {      
            if (this.posX <= 0) {   
                this.posX = 610;
                clearInterval(id)
            }
            this.move();   
        }, 100);  
    }
}