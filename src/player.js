class Player {
  constructor(lives = 3, shipImgSrc, posX = 0, posY = 0, speed = 50, direction = "N") {
    this.lives = this.lives;
    this.posX = 150;
    this.posY = 275;
    this.direction = 0;
    this.start = null;
    this.speed = speed;
    this.image = new Image();
    /*this.image.src = shipImgSrc;*/
    this.framex = 0;
    this.framey = 0;
    this.frames = 4;
    this.framesIndex = 0;
    //this.topHolder = this.getPosition();
    /*this.ship = document.querySelector('.ship');*/
  }

  removeLives() {
    this.lives = this.lives - 1;
  }

  // draw(framesCounter) {
  //   this.ctx.drawImage(
  //     this.image,
  //     this.framesIndex * Math.floor(this.image.width / this.frames),
  //     0,
  //     Math.floor(this.image.width / this.frames),
  //     this.image.height,
  //     this.posX,
  //     this.posY,
  //     this.width,
  //     this.height,
  //   );
  //   this.animate(framesCounter);
  // }

  // animate(framesCounter) {
  //   if (framesCounter % 5 === 0) {
  //     this.framesIndex++;

  //     if (this.framesIndex > 3) this.framesIndex = 0;
  //   }
  // }
  /*handleScreenCollision(){
      const screenLeft = 0;//screenTop
      const screenRight = this.canvas.width;//screenBottom = this.canvas.height

      const knightLeft = this.x; //playerTop = this.y
      const knightRight = this.x + this.width; //playerBottom = this.y + this.size

      if(knightRight >= screenRight) this.setDirection("left");
      else if(knightLeft <= screenLeft) this.setDirection("right");
  }*/
}