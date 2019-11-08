const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  score: undefined,
  keys: {
    SPACE: 32
  },
  firstPlay: true,
  objofDay: 40,

 
  oneClientArr: [],
  ingredients: [],
  selectedIngr: [],
  totalingredients: [
    "tomate",
    "setas",
    "pinas",
    "pimientos",
    "queso",
    "olive",
    "gambas",
    "picante",
    "salmon",
    "mozzarella"
  ],

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = window.innerWidth * 0.98;
    this.height = window.innerHeight * 0.98;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.start();
  },

  start() {
    this.reset();
    this.interval = setInterval(() => {
      //Intervalo de juego.
      this.framesCounter++; //Contador de frames

      // controlamos que frameCounter no sea superior a 200
      if (this.framesCounter > 200) this.framesCounter = 0;
      // console.log(`game time ${this.framesCounter}`);
      this.clear();
      this.drawAll();
      // this.clients.moveIn()
      this.generarOneClient();
      // this.clients.patienceCounter();

      this.changeFps(),
       

       
        this.patienceClientsAll();

        this.musicbackground();
      

      if (this.score <= 0) {
                this.gameOver();
      } else if (this.score > this.objofDay) {
        this.gameWin()
      }
      
    }, 5000 / this.fps);
  },

  changeFps() {
    if (this.framesCounter % 30 == 0) {
      console.log(this.fps);
      this.fps += +60;
      console.log(this.fps);
    }
  },

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  // generateClients() {
  //   console.log("genera clientes");

  //   if (this.framesCounter % 30 == 0 && this.clientsArr[0] == null) {
  //     console.log("cliente de 30");

  //     let position = this.clientsArr.indexOf(null);
  //     if (position == -1) {
  //       this.clientsArr.push(new Clients(this.ctx, 600)); //push nuevos clients
  //     } else {
  //       this.clientsArr.splice(position, 1);
  //       this.clientsArr.splice(
  //         position,
  //         1,
  //         new Clients(this.ctx, 200 + position * 200)
  //       );
  //     }

  //   }

  //   if (this.framesCounter % 40 == 0 && this.clientsArr[1] == null) {
  //     console.log("cliente de 60");

  //     this.clientsArr.push(new Clients(this.ctx, 400));

  //   } else if (this.framesCounter % 50 == 0 && this.clientsArr[2] == null) {
  //     console.log("cliente 90");

  //     this.clientsArr.push(new Clients(this.ctx, 200));

  //   }
  // },
  // clearClients() {
  //   console.log(this.clientsArr);
  //   if (this.clientsArr.length == 3 && this.framesCounter % 30 == 0) {
  //     this.clientsArr[0] = null;
  //     console.log(`esto es el delete ${this.clientsArr}`);
  //   }
  //   if (this.clientsArr.length > 3) {
  //     this.clientsArr.splice(2, 1);
  //     console.log("esto es un splice");
  //   }
  // },

  reset() {
    // here to initialize the scoreboard

    this.scoreboard = ScoreBoard;
    this.scoreboard.init(this.ctx);
    this.score = 20;

    // here to initialize the new class of object

    this.background = new Background(this.ctx, this.width, this.height);

   

    ///Bottone Entrega e Borrar ingredients

    this.entregabutton = new Entrega(
      this.ctx,
      550,
      530,
      100,
      100,
      "/img/buttonentrega.png",
      "entrega"
    );

    this.buttonborraingredients = new Borrarlastingredients(
      this.ctx,
      570,
      640,
      50,
      50,
      "/img/deletebutton.png",
      "borrar"
    );

    // Pintamos los ingredientes de la bandeja

    this.tomate = new Ingredients(
      this.ctx,
      50,
      630,
      "/img/tomate.png",
      "tomate"
    );
    this.setas = new Ingredients(this.ctx, 150, 630, "/img/setas.png", "setas");
    this.gambas = new Ingredients(
      this.ctx,
      250,
      630,
      "/img/gambas.png",
      "gambas"
    );
    this.olive = new Ingredients(this.ctx, 350, 630, "/img/olive.png", "olive");
    this.pimientos = new Ingredients(
      this.ctx,
      450,
      630,
      "/img/pimientos.png",
      "pimientos"
    );

    this.pinas = new Ingredients(this.ctx, 50, 560, "/img/pinas.png", "pinas");
    this.queso = new Ingredients(this.ctx, 150, 560, "/img/queso.png", "queso");
    this.mozzarella = new Ingredients(
      this.ctx,
      250,
      560,
      "/img/mozzarella.png",
      "mozzarella"
    );
    this.picante = new Ingredients(
      this.ctx,
      350,
      560,
      "/img/picante.png",
      "picante"
    );
    this.salmon = new Ingredients(
      this.ctx,
      450,
      560,
      "/img/salmon.png",
      "salmon"
    );

    this.ingredients.push(
      this.tomate,
      this.setas,
      this.pinas,
      this.pimientos,
      this.queso,
      this.olive,
      this.gambas,
      this.picante,
      this.salmon,
      this.mozzarella
    );

    // this.clientsArr.forEach(ele => ele.randomIgreArray()); // genera un array de ingredientes random en clients

   
  },
  generarOneClient() {
    console.log(this.oneClientArr);
    if (this.oneClientArr.length == 0) {
      this.oneClientArr.push(new Clients(this.ctx, 400));
      this.oneClientArr.forEach(elm => elm.randomIgreArray());
    }
    console.log(this.oneClientArr);
  },

  drawAll() {
    this.background.draw(),
      // this.clients.draw(),
      this.oneClientArr.forEach(elm => elm.draw());
    this.drawScore(), this.oneClientArr.forEach(elm => elm.orderCall());
    this.drawObOfTheDay();
    this.drawIngreOnPantalla();

  

    // this.clientsArr.forEach(ele => {
    //   if (ele instanceof Clients) {
    //     ele.orderCall();
    //   }
    // }),
    this.entregabutton.draw(), this.buttonborraingredients.draw();
    this.ingredients.forEach(ele => ele.draw()); // for  draw all ingredients in array collection

    // this.clientsArr.forEach(ele => {
    //   ele instanceof Clients ? ele.draw() : null;
    // }); //draw all clients in array
  },

 
  patienceClientsAll() {
    // this.clientsArr.forEach(ele => {
    //   if (ele instanceof Clients) {
    //     ele.patienceCounter();
    //   }
    // });

    this.oneClientArr.forEach(ele => ele.patienceCounter("nada"));
    console.log("esto es el metodo pacientall");
  },

  

  newEqualALL() {
    this.oneClientArr[0].orderValue();

    if (
      this.oneClientArr[0].clientOrder.join("") === this.selectedIngr.join("")
    ) {
      console.log("Perfect, seems good");
      console.log(this.oneClientArr[0]._orderValueScore);

      this.oneClientArr[0].patienceCounter("stop");
      this.score += this.oneClientArr[0]._orderValueScore;
      this.oneClientArr = [];
      this.selectedIngr = [];
    } else {
      console.log("This is not what I want");
      this.score -= this.oneClientArr[0]._orderValueScore;
    }
  },

  // if (a[i].clientOrder.join("") === b.join("")) {
  //   console.log("Perfect, seems good");

  //   this.oneClientArr[i].patienceCounter("stop");
  //   this.score += this.oneClientArr[i]._orderValue();
  // } else {
  //   console.log("This is not what I want");
  //   this.score -= this.oneClientArr[i]._orderValue();
  // }

  drawScore() {
    this.scoreboard.update(this.score);
  },

  gameOver() {

    this.firstPlay = false;
    this.background.drawGameOver(this.ctx, 200, 400);
    Game.fps = 60;
    clearInterval(this.interval);

    document.onkeydown = e => {
      switch (e.keyCode) {
        case this.keys.SPACE:
          this.ingredients.length = 0;
          Game.start();
      }
    };
  },

  gameWin() {
  this.background.drawGameWin()(this.ctx, 200, 400);
    Game.fps = 60;
    
},

  drawObOfTheDay() {
  this.ctx.fillStyle = "yellow";
  this.ctx.fillText("Objective of the day = $" + this.objofDay, 70, 40);
},
  
  drawIngreOnPantalla() {
    this.ctx.fillStyle = "red";
    this.ctx.fillText("Selected ingredients:" + this.selectedIngr, 70, 90);
  },

  ////Audio
  musicbackground() {
    this.music = document.getElementById("backgroundmusic").play();
  },
  

  addingreisound() {
    this.addingreclicksound = document.getElementById("addingredientsound").play();
  },

  deleteingresound() {
    this.deletesoundingre = document.getElementById("borraingredientssound").play();
  },

  servepizzasound() {
    this.servepizza = document.getElementById("entregabutton").play();
  },

  clientoksound() {
    this.clientestabienservido = document.getElementById("clientok").play();
  },

  clientwrong() {
    this.clientnowronf = document.getElementById("clientwrong");
  },
  gameovsoundddd() {
    this.gameoversound = document.getElementById("gameovvver").play();
  }

};
