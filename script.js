function createNewGrid() {
  const squares = prompt("Enter the number of squares per side (maximum 100):");
  const gridSize = parseInt(squares);
  
  if (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
    alert("Invalid input!");
    return;
  }
  
  let container = document.querySelector(".container");
  container.innerHTML = '';
  const itemSize = 960 / gridSize;  
  const gridTemplateColumns = `repeat(${gridSize}, ${itemSize}px)`;
  container.style.gridTemplateColumns = gridTemplateColumns;
  
  
  for (let i = 0; i <gridSize; i++){
    for (let j = 0; j <gridSize; j++){
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";
      container.appendChild(gridItem);
    }
  }

};