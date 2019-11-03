class Clients {
  constructor(ctx) {
    this._ctx = ctx;
    this._image = new Image();
    this._image.src = "/img/client3.png";
    this._posX = 220;
    this._posY = 400;
    this._vel = 5;
    this._imageProfile = [
      "/img/client1.png",
      "/img/client2.png",
      "/img/client3.png"
    ];
    this._clientsPatience = 50;
  }

  imageRandom() { // no funciona
    this._image.src = this._imageProfile[
      Math.floor(Math.random() * this._imageProfile)
    ];
  }

  draw() {
    this._ctx.drawImage(this._image, this._posX, this._posY, 50, 100);
  }

  move() {
    if (this._posX >= window.innerWidth / 2 - 50) {
      console.log("STOP");
    } else {
      this._posX += this._vel;
    }
  }

  // patienceGenerator(min, max) {
  //   this._clientsPatience = Math.floor(Math.random() * (max - min + 1) + min);
  // }

  patienceCounter() {
    this._clientsPatience--;
    if (this._clientsPatience < 50 && this._clientsPatience > 20) {
      console.log("I'm hungry, hurry up");
    } else if (this._clientsPatience < 20 && this._clientsPatience > 2) {
             console.log("Not much time left!");
    } else if (this._clientsPatience <= 1) {
      //// make  function to make disappear clients
             console.log("ciaone");
           }
  }
}