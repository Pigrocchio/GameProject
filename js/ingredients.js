class Ingredients {
  constructor(ctx, posX, posY, image, name) {
    this._ctx = ctx;
    this._posX = posX;
    this._posY = posY;
    this._width = 70;
    this._height = 70;
    this._color = "red";
    this._name = name;

    this._image = new Image();
    this._image.src = image;

    this.setlistener();
  }

  draw() {
    // this._ctx.fillStyle = this._color;
    // this._ctx.fillRect(this._posX, this._posY, this._width, this._height);
    this._ctx.drawImage(
      this._image,
      this._posX,
      this._posY,
      this._width,
      this._height
    );
  }

  ingredientOnPantalla() {
    this._ctx.font = "15px sans-serif";
    this._ctx.fillStyle = "yellow";
    this._ctx.fillText(
      `Me gustaria una pizza con ${this.name}`,
      this._posX,
      this._posY - 30
    );
  }

  setlistener() {
    let x = this._posX;
    let y = this._posY;
    let w = this._width;
    let h = this._height;
    let name = this._name;

    if (Game.firstPlay) {
      document.addEventListener(
        "click",
        function(e) {
          // console.log(e.clientX + "," + e.clientY);
          if (
            e.clientX > x &&
            e.clientX < x + w &&
            e.clientY > y &&
            e.clientY < y + h
          ) {
            Game.addingreisound();
            Game.selectedIngr.push(name);
            console.log(Game.selectedIngr);
          }
        },
        false
      );
    }
  }
}
