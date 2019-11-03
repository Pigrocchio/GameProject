const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  score: undefined,
  clients: [],

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = window.innerWidth * 0.98;
    this.height = window.innerHeight * 0.98;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.start();
    this.mousepoint = mousePoint; // --> non mi è chiaro perchè così funziona se nn lo metto
    this.mousepoint.mouse();
    this.mousepoint.mouseButton();
  },

  start() {
    this.reset();
    this.interval = setInterval(() => {
      //Intervalo de juego.
      this.framesCounter++; //Contador de frames

      // controlamos que frameCounter no sea superior a 1000
      if (this.framesCounter > 200) this.framesCounter = 0;
      console.log(`game time ${this.framesCounter}`);
      this.clear();
      this.drawAll();
      this.generateClients(); // generate news clients
      
      this.moveAll();
      this.patienceClientsAll();
      this.clearClients();
      
    }, 3000 / this.fps);
  },

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  generateClients() {
    if (this.framesCounter % 70 == 0) {
      //Generamos client cada 20 frames.
      console.log(this.clients);
      this.clients.push(new Clients(this.ctx)); //pusheamos nuevos clients
    }
  },

  reset() {
    // here to initialize the new class of object

    this.background = new Background(this.ctx, this.width, this.height);
    this.clients = new Clients(this.ctx);
    this.clients = [];
  },

  drawAll() {
    this.background.draw();
    this.clients.forEach(ele => ele.draw());
  },

  moveAll() {
    this.clients.forEach(ele => ele.move());
  },

  patienceClientsAll() {
  this.clients.forEach(ele => ele.patienceCounter());
},

  clearClients() {
    //funcion para limpiar clients
          if (this.clients.length > 3) {
        this.clients.pop()
      }
    
  }
};
