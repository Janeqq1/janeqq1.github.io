/* const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
}); */

const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", ()=>{
  if (parent.childNodes.length > 1) {
    alert("can not add more");
    return;
  }

  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "child";
  parent.appendChild(child);
});

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", ()=>{
  const child = document.body.querySelector(".child");
  parent.removeChild(child);
});

function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 2; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}

// starting from number 1 and repeatedly either adding 5 or multiplying by 3,
// in infinite set of numbers can be prodcued. The following function will find
// a sequence of such additions and multiplications that would produce the input #
// output: an array of "operation" in the string format "+5" or "*3"
// hmm: is the solution unique??
// returns true/false to signal whether a path has been found. And the path is 
// recorded in opArray
function findPath(x, opArray) {
  let result = false;
  let localArray = [];
  if (x === 1) {
    console.log("Yeah we have found a path!");
    result = true;
    opArray.push(localArray);
    return result;
  }

  if (x < 1) {
    console.log("Oops, can not find a path for your input number");
    result = false;
    return result;
  }

  let prevNum;
  // a given number, we can figure out easily what's the last step leading to it
  // since 3 and 5 are mutual prime, it will either come through "adding 5" or
  // "multiplying by 3". However this may not always be true, if the two numbers are not
  // mutual primes

  if (x % 3 !== 0) {
    // we can only come from adding 5
    prevNum = x - 5;
    result = findPath(prevNum, localArray);
    if (result) {
      localArray.push("+5");
      opArray.push(localArray);
    }
    return result;
  } else {
    // we come from multiplying by 3 or adding 5 !!
    // check multiplying by 3 first
    // cate for possible multiple paths
    let newArray = [...localArray];
    let foundOne = false;
    prevNum = x / 3;
    result = findPath(prevNum, localArray);
    if (result) {
      localArray.push("*3");
      foundOne = true;
      opArray.push(localArray);
    }

    // try adding 5
    prevNum = x - 5;
    result = findPath(prevNum, newArray);
    if (result) {
      newArray.push("+5");
      opArray.push(newArray);
      if (foundOne) {
        console.log("!!Found multiple paths!!");
      }
    }
    return foundOne || result;
  }
}


var myArray=[];
var myNum = 4;
console.log(findPath(96, myArray), " ", myArray);

