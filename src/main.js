const getRow = (rowIndex) => {
  let rowItens = [];
  let row = document.querySelector(".tic-tac-toe").childNodes[rowIndex];
  rowItems.push(row.childNodes[1], row.childNodes[3], row.childNodes[5]);

  return rowItens;
};

const verifyVictory = () => {
  for (let i = 0; i < victoryPatterns.length; i++) {
    const victoryPattern = victoryPatterns[i];
    for (let j = 0; j < victoryPattern.length; j++) {
      const rowBlock = rows[victoryPattern[j]];
      const rowBlockText = rowBlock.childNodes[0].innerHTML;
      if (rowBlockText != player) break;
      if (j == victoryPattern.length - 1) alert(`player ${player} wins`);
    }
  }
};

const addOnClick = (obj) => {
  obj.addEventListener("click", () => {
    if (obj.childNodes[0].innerHTML == "") {
      obj.childNodes[0].innerHTML = player;
      verifyVictory();
      player == "X" ? (player = "O") : (player = "X");
    }
  });
};

const addOnClickObjs = (array) => {
  array.map((item) => {
    addOnClick(item);
  });
};

const resetGame = () => {
  for (let i = 0; i < rows.length; i++) {
    rows[i].childNodes[0].innerHTML = "";
    player = "X";
  }
};

const getRows = () => {
  let rows = [];
  let firstRow = getRow(1);
  let secondRow = getRow(3);
  let thirdRow = getRow(5);

  rows = [...firstRow, ...secondRow, ...thirdRow];
  return rows;
};

const victoryPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const rows = getRows();
let player = "X";
addOnClickObjs(rows);
