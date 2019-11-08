window.onload = () => {
  document.getElementById("start").onclick = () => {
    document.getElementById("bgscreen").style.display = "none";
    Game.init();
  };
}