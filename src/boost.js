class Boost {
    constructor(posX, posY) {
        this.posX = 90;
        this.posY = posY;
    }
    goAttack(){
        const id = setInterval(() => {      
            if (this.posX <= 0) {   
                this.posX = 610;
                clearInterval(id)
            }
            this.move(); 
        }, 500);  
    }
    move() {
        this.posX = this.posX - this.speed;
    }
}