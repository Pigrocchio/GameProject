const ScoreBoard = {
  ctx: undefined,

  init: function (ctx) {
    this.ctx = ctx
    this.ctx.font = "30px sans-serif"
  },
  
  update: function (score) {
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText('Money:' + ' ' + Math.floor(score), 70, 70);
  }
};
