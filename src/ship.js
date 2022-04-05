class Ship {
  constructor(lives = 3, posX = 0, posY = 0, speed = 10, direction = "N") {
    this.lives = this.lives;
    this.width = 20;
    this.height = 20;
    this.posX = 275;
    this.posY = 325;
    this.direction = 0;
    this.start = null;
    this.speed = speed;
    this.image = new Image()
    this.framex = 0;
    this.framey = 0;
    this.frames = 4;
    this.framesIndex = 0;
  }
  
  removeLives() {
    this.lives = this.lives - 1;
  }
}