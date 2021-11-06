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
    constructor(posX = 0, posY = 0) {
        this.pos = { x: 10, y: 10 };
        this.posX = posX;
        this.posY = posY;
        this.direction = 0;
    }
    
    /*goUp(direction, posX, posY) {
        // +1 down -1 up
        if (direction === "Up") {
          this.direction = posY--;
        }
        // después de un condicional, si solo hay una línea de codigo, no hace falta poner  {}
        else if (direction === "ArrowUp") this.direction = this.posY--;
      }*/


    goUp() {
        {
            this.posY--;
        }
    }

    goDown() {
        {
            this.posY++;
        }
    }

    goLeft() {
        {
            this.posX--;
        }
    }

    goRight() {
        {
            this.posX++;
        }
    }
}