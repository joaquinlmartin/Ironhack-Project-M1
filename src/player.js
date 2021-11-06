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
    constructor(maxRows, maxColumns) {
        this.initialBody = [
          { row: 1, column: 1 },
        ];
        this.direction = 'right';
        this.intervalId = undefined;
        this.maxRows = maxRows;
        this.maxColumns = maxColumns;
        this.body = [...this.initialBody];
      }

     
    _moveForward() {
        let head = this.body[0];
        switch (this.direction) {
            case "N":
                this.dirY++;
                break;
            case "E":
                this.dirX++;
                break;
            case "S":
                this.dirY--;
                break;
            case "W":
                this.dirX--;
                break;
            default:
                break;
        }
    }

    
    move() {
        this.intervalId = setInterval(this._moveForward.bind(this), 100);
      }
}