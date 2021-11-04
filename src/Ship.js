class Ship {
    constructor(dirX = 0, dirY = 0, orientation = "N") {
        this.dirX = dirX;
        this.dirY = dirY;
        this.orientation = orientation;
    }

    move() {
        switch (this.orientation) {
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


}