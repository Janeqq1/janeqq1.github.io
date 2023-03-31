var pos = 0;
var started = false;
var posY = 0;

let img = document.getElementById("PacMan");
let imgWidth = img.width;

let fieldDiv = document.getElementById("playfield");
let fieldWidth = parseInt(fieldDiv.style.width);
let fieldHeight = parseInt(fieldDiv.style.height);

const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];
var direction = 0;
var focus = 0;

function Run() {
  
  if (!started) {
    return;
  }

  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, fieldWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    if (pos < 0) {
      pos = 0;
    }
    img.style.left = pos + "px";
    img.style.top = posY + "px";
  } else {
    pos += 20; 
    if (pos + imgWidth > fieldWidth) {
      pos = fieldWidth - imgWidth;
    }
    img.style.left = pos + "px";
    img.style.top = posY + "px";
  }

  setTimeout(Run, 300);
}

function StartPac() {
  if (!started) {
    started = true;
    Run();
  } else {
    // don't start again. It would setTimeout again and make PacMan run faster
  }
}

function StopPac() {
  started = false;
}

function UpPac() {
  if (!started) {
    return;
  }
  posY -= 20;
  if (posY <= 0) {
    posY = 0;
  }
}

function DownPac() {
  if (!started) {
    return;
  }
  posY += 20;
  if (posY + imgWidth >= fieldHeight) {
    posY = fieldHeight - imgWidth;
  }
}

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (direction == 0 && pos + imgWidth >= pageWidth) direction = 1;
  if (direction == 1 && pos <= 0) direction = 0;

  return direction;
}

//export default {checkPageBounds};
if (typeof module !== 'undefined') {
  module.exports = { checkPageBounds };
}