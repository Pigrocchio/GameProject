class Clients {
  constructor(ctx, posX) {
    this._ctx = ctx;
    this._image = new Image();

    this._posX = posX;

    this._posY = 400;
    this._vel = 5;
    this._imageProfile = [
      "./img/profile1.png",
      "./img/profile2.png",
      "./img/profile3.png",
      "./img/profile4.png"
    ];
    let imageRandom = Math.floor(Math.random() * (4 - 0) + 0);
    this._image.src = this._imageProfile[imageRandom];

    this._clientsPatience = 150;
    this._orderValueScore = " ";

    ///Array que se debe comparar con el array de los ingredientes selecionados
    this.clientOrder = [];

    ///Alert image cuando sta terminando el tiempo
    this._imageAlert = new Image();
    this._imageAlert.src = "./img/hurry.png";

/////Image cuando il tiempo termina
    this._imageTimeTerminado = new Image();
    this._imageTimeTerminado.src = "./img/angry-comic-mad-anger-symbol-38812 copy.png";
  }

  ///// Para generar una lista de ingredenties random
  randomIgreArray() {
    let shuffled = Game.totalingredients
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);

    let randomnumber = [Math.floor(Math.random() * 3) + 2]; ///variar el numero maximo de los array que el cliente puede elegir
    console.log(randomnumber);

    for (let i = 0; i < randomnumber; i++) {
      this.clientOrder.push(shuffled[i]);
      console.log(shuffled[i]); // rellena el order del cliente
    }

    console.log(this.clientOrder);
  }
  /// calcola el valora del pedido
  orderValue() {
    let pizzaValue = this.clientOrder.length * 3;
    this._orderValueScore = pizzaValue;
    console.log(this._orderValueScore);
  }

  //// mostra el pedido en la pantalla
  orderCall() {
    this._ctx.font = "15px sans-serif";
    this._ctx.fillStyle = "yellow";
    this._ctx.fillText(
      `Me gustaria una pizza con ${this.clientOrder}`,
      this._posX,
      this._posY - 30
    );
  }

  draw() {
    this._ctx.drawImage(this._image, this._posX, this._posY, 100, 100);
  }

  moveIn() {
    let halfscreen = this._posX >= window.innerWidth / 2 - 50;
    if (halfscreen) {
      // console.log("STOP");
      return;
    } else {
      this._posX += this._vel;
    }
  }

  moveOut() {
    this._posX -= this._vel;
  }

  //// genera alerta si la pacienza del cliente es demasadio baja
  alertdraw() {
    this._ctx.drawImage(
      this._imageAlert,
      this._posX - 50,
      this._posY - 20,
      70,
      70
    );
  }

  TimeOutdraw() {
    this._ctx.drawImage(
      this._imageTimeTerminado,
      this._posX - 50,
      this._posY - 20,
      70,
      70
    );
  }

  patienceCounter(p) {
    if (p === "stop" && this._clientsPatience > 0) {
      this._clientsPatience = 1000;
      console.log(`Gracias. Aqui tienes ${this._orderValueScore} £`);
      this._posX = window.innerWidt + 20; // sale da la pantalla
    } else {
      this._clientsPatience--;
      
      if (this._clientsPatience < 90 && this._clientsPatience > 50) {
        console.log("I'm hungry, hurry up");
        this.alertdraw();
      } else if (this._clientsPatience < 50 && this._clientsPatience > 1) {
               Game.score -= 5; /// poner el valor actual del pedido
               console.log("Tardas muchooooo, me voy");
               this.TimeOutdraw();
        this._posX = window.innerWidt + 20; // sale da la pantalla
         this._clientsPatience = 0
               Game.selectedIngr = [];
              setTimeout(function() {
  Game.oneClientArr.splice(0, 1);
}, 1500);
        
               ;
             }
    }
  }
}
