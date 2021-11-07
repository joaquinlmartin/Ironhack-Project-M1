/*class Ship {
    constructor(dirX = 0, dirY = 0, orientation = "N") {
        this.dirX = dirX;
        this.dirY = dirY;
        this.orientation = orientation;
        this.lives = 3;
        this.start = null;
        this.topHolder = this.getPosition();
    }*/

class Player {
    constructor(posX = 0, posY = 0, direction = "N") {

        this.posX = posX;
        this.posY = posY;
        this.direction = 0;
        /*this.ship = document.querySelector('.ship');*/
        
    }
     /*goUp() {
        switch (this.direction) {
          case "N":
            this.posY++;
            console.log()
            break;
          case "E":
            this.posX++;
            break;
          case "S":
            this.posY--;
            break;
          case "W":
            this.posX--;
            break;
          default:
            break;
        }
      
      }*/


    
    /*setDirection(direction){//x+1 right || x-1 left
        if(direction === "left") this.direction = -1;//up
        else if(direction === "right") this.direction = 1;//down
    }

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
    
    
    
    
    /*goUp(direction, posX, posY) {
        // +1 down -1 up
        if (direction === "Up") {
          this.direction = posY--;
        }
        // después de un condicional, si solo hay una línea de codigo, no hace falta poner  {}
        else if (direction === "ArrowUp") this.direction = this.posY--;
      }
      updatePosition() {
        // esto actualiza la posición de nuestro jugador
        this.y += this.direction * this.speed;
      }
      handleScreenCollision() {
        const screenTop = 0;
        const screenBottom = this.canvas.height;
    
        const playerTop = this.y;
        const playerBottom = this.y + this.size;
    
        if (playerBottom >= screenBottom) this.setDirection("up");
        else if (playerTop <= screenTop) this.setDirection("down");
      }*/

    /*goUp() {
        {
            this.Player.posY--;
        }
    }

    goDown() {
        {
            this.Player.posY++;
        }
    }

    goLeft() {
        {
            this.Player.posX--;
        }
    }

    goRight() {
        {
            this.Player.posX++;
        }
    }*/

    
}