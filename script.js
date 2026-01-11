let eraseMode = false;
let currentGrid = 16;
let pixelSizePerSquare = Math.floor(960/currentGrid);

const container = document.querySelector(".container");

const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  const gridSize = prompt("Grid size ? Enter a number from 1 to 100") || 16;
  if(!Number.isInteger(Number(gridSize)) || Number(gridSize) > 100){
    alert("Please only enter a number from 1 to 100!");
    return;
  }
  currentGrid = gridSize;
  pixelSizePerSquare = Math.floor(960/gridSize);
  container.innerHTML = "";
  generatePad(gridSize);
});

const generatePad = (gridSize = 16) => {
  //create row
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.setAttribute(
      "style",
      "display: flex; flex-direction: row; width: 100%;"
    );

    for (let j = 0; j < gridSize; j++) {
      const columnWithinRow = document.createElement("div");
      columnWithinRow.className = "item";
      columnWithinRow.setAttribute(
        "style",
        `background: white; width: ${pixelSizePerSquare}px; height: ${pixelSizePerSquare}px`
      );
      columnWithinRow.style.border = "1px solid black";
      row.appendChild(columnWithinRow);
    }
    container.appendChild(row);
  }

  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    // item.addEventListener("mouseover", (e) => {
    //     item.setAttribute("style", "background: black; width: 30px; height: 30px; border: 1px solid black");
    // })
    item.addEventListener("mouseenter", (e) => {
      item.setAttribute(
        "style",
        `background: ${eraseMode ? 'white' : 'black'}; width: ${pixelSizePerSquare}px; height: ${pixelSizePerSquare}px; border: 1px solid black`
      );
    });
    // item.addEventListener("mouseout", (e) => {
    //     item.setAttribute("style", "background: white; width: 30px; height: 30px; border: 1px solid black");
    // })
  });
};

generatePad();

const paintButton = document.querySelector(".btn-paint");
paintButton.addEventListener("click", () => {
    eraseMode = false;
})

const eraseButton = document.querySelector(".btn-eraser");
eraseButton.addEventListener("click", () => {
    eraseMode = true;
})

const clearButton = document.querySelector(".btn-clear");
clearButton.addEventListener("click", () => {
    eraseMode = false;
    container.innerHTML = "";
    generatePad(currentGrid);
})
