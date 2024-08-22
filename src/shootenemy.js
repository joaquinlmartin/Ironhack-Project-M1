class shootEnemy {
    constructor (posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.speed = 20;
    }
    move() {
        this.posX = this.posX - this.speed;
    }
    goAttack(){
        const id = setInterval(() => {      
            if (this.posX >= 0) {   
                this.posX = 610;
                clearInterval(id)
            }
            this.move(); 
        }, 500);  
    }
}