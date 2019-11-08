class Background {
  constructor(ctx, w, h) {
    this.ctx = ctx;
    this.width = w;
    this.height = h;

    this.image = new Image();
    this.image.src = "./img/bg.png";

    //// background game over
    this.imageGameOver = new Image();
    this.imageGameOver.src = "./img/gameoverpizzaimg copy.png";

    //// background game win
    this.imageGameWin = new Image();
    this.imageGameWin.src = "./img/winbackgorund.png";

    this.posX = 0;
    this.posY = 0;

    this.velX = 5;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }

  ///drawmethod game over
  drawGameOver() {
    this.ctx.drawImage(
      this.imageGameOver,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }

  ///drawmethod game win
  drawGameWin() {
    this.ctx.drawImage(
      this.imageGameWin,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }
}
