class Score {
    constructor(ctx,posX, posY) {
      this.ctx = ctx;
      this.posX = posX;
      this.posY = posY;  
      this.score = 0;
      this.align = "left";
      this.color = 'red';
      this.font = "50";
    }
    draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.font = this.font + "px sans-serif";
      this.ctx.textAlign = this.align;
      this.ctx.fillText("Score: " + this.score, this.posX, this.posY);
      this.ctx.closePath();
    }
  }