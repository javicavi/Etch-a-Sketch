// Default color
let color = "black";

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  // Makes 16 columns and each column will have a width of 1/16 of the width of the container
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for(let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.id=`div${i}`
    square.addEventListener("mouseover", colorSquare);
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  if(input >= 2 && input <= 100) {
    populateBoard(input);
  } else {
    console.log("Input error.");
  }
  // When using a random color, if the grid size is changed, the last generated color
  // will remain fixed, so each time the size is changed, the color black will be set
  color = "black";
}

boardSizeInput.addEventListener("change", (event) => {
  const inputValue = parseInt(event.target.value);
  changeSize(inputValue);
});

function colorSquare() {
  this.style.backgroundColor = color;
}

function randomInteger(max) {
  return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return `rgb(${r}, ${g}, ${b})`
}

whiteButton.addEventListener("click", () => {
  changeColor(whiteButton.name);
});

blackButton.addEventListener("click", () => {
  changeColor(blackButton.name);
});

randomButton.addEventListener("click", () => {
  changeColor(randomButton.name);
});

resetButton.addEventListener("click", () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      square.style.backgroundColor = "white";
    });
});

function changeColor(value) {
  color = value;
  if(color == "random") color = randomRgbColor();
  let squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.addEventListener("mouseover", () => {
      if (color == "white") color = "white";
      else if (color == "black") {
        color = "black";
      } else {
        color = randomRgbColor();
      }
      // switch (color) {
      //   case "white":
      //       color = "white";
      //       break;
      //   case "black":
      //       color = "black";
      //       break;
      //   default:
      //       color = randomRgbColor();
      //       break;
      // }
    });
  });
}