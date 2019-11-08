class Entrega {
  constructor(ctx, posX, posY, w, h, image, name) {
    this._ctx = ctx;
    this._posX = posX;
    this._posY = posY;
    this._width = w;
    this._height = h;
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

  setlistener() {
    let x = this._posX;
    let y = this._posY;
    let w = this._width;
    let h = this._height;
    let name = this._name;

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
            console.log('PUSHED --> LANZAR FUNCTION VERIFY PEDIDO')
          console.log('es el boton');
          Game.servepizzasound();
            Game.newEqualALL();
         
          
            
        }
      },
      false
    );
  }
    
    
   
}

class Borrarlastingredients extends Entrega {
  constructor(ctx, posX, posY,w,h, image, name) {
      super(ctx, posX, posY,w,h, image, name);
      super.draw
  }




  setlistener() {
    let x = this._posX;
    let y = this._posY;
    let w = this._width;
    let h = this._height;
    let name = this._name;

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
          console.log("BORRO INGREDIENTS");
          Game.deleteingresound()
            Game.selectedIngr.pop()
          console.log(Game.selectedIngr);
          
            
        }
      },
      false
    );
  }
}
 