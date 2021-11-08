class Player {
    constructor(posX = 0, posY = 0, direction = "N") {
        this.posX = 150;
        this.posY = 275;
        this.direction = 0;
        this.lives = 3;
        this.start = null;
        //this.topHolder = this.getPosition();
        /*this.ship = document.querySelector('.ship');*/
    }
    /*
    updatePosition(){
        this.x += this.direction * this.speed;//if it would be up and down it would be this.y
    }
    handleScreenCollision(){
        const screenLeft = 0;//screenTop
        const screenRight = this.canvas.width;//screenBottom = this.canvas.height

        const knightLeft = this.x; //playerTop = this.y
        const knightRight = this.x + this.width; //playerBottom = this.y + this.size

        if(knightRight >= screenRight) this.setDirection("left");
        else if(knightLeft <= screenLeft) this.setDirection("right");
    }*/
}