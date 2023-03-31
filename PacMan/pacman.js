var pos = 0;
let pageWidth = window.innerWidth;
pageWidth = 600;
console.log("pageWidth is: " + pageWidth);
let fieldDiv = document.getElementById("playfield");
let fieldWidth = parseInt(fieldDiv.style.width);
console.log("field Width 1000 is: " + fieldWidth);

const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];
var direction = 0;
var focus = 0;

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  console.log("imgWidth: " + imgWidth);
  console.log("pageWidth: " + pageWidth);
  console.log("pos: " + pos);
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, fieldWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    if (pos < 0) {
      pos = 0;
    }
    img.style.left = pos + "px";
  } else {
    pos += 20; 
    if (pos + imgWidth > fieldWidth) {
      pos = fieldWidth - imgWidth;
    }
    img.style.left = pos + "px";
  }

  setTimeout(Run, 300);
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