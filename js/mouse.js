const mousePoint = {
  mouse() {
    canvas.addEventListener("mousemove", mouseMoving, false);

    function mouseMoving(e) {
      console.log(`mouse x: ${e.clientX} mouse y ${e.clientY}`);
    }
    },
    
    mouseButton() {
canvas.addEventListener("mousedown", buttonPress, false);
 
function buttonPress(e) {
    if (e.button == 0) {
        console.log("Left mouse button pressed!");
    } else if (e.button == 1) {
        console.log("Middle mouse button pressed!");
    } else if (e.button == 2) {
        console.log("Right mouse button pressed!");
    } else {
        console.log("Things be crazy up in here!!!");
    }
}
        }

};