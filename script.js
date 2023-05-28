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

  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseenter', handleMouseEnter);
  });
    
  function handleMouseEnter(event) {
    const currentColor = getComputedStyle(event.target).backgroundColor;
    const colorParts = currentColor.match(/\d+/g);
    const red = parseInt(colorParts[0]);
    const green = parseInt(colorParts[1]);
    const blue = parseInt(colorParts[2]);

    let newRed, newGreen, newBlue;

    if (red === 255 && green === 255 && blue === 255) {
      newRed = getRandomColorValue();
      newGreen = getRandomColorValue();
      newBlue = getRandomColorValue();
    } else if (red === 0 && green === 0 && blue === 0){
      return;
    } else {
      newRed = Math.max(0, red - 25.5);
      newGreen = Math.max(0, green - 25.5);
      newBlue = Math.max(0, blue - 25.5);
    }

    const newColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`;
    event.target.style.backgroundColor = newColor;
  }

  function getRandomColorValue() {
    return Math.floor(Math.random() * 256);
  }
};