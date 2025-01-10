import Ship from "../ship/ship";

function gameBoard() {
  const gameBoardTable = [[], [], [], [], [], [], [], [], [], []];

  function placeShip(x, y, length, direction) {
    const newShip = Ship();
    gameBoardTable[x][y] = newShip;

    if (direction === "vertical") {
      for (let i = x + 1; i < length + x; i += 1) {
        gameBoardTable[i][y] = newShip;
      }
    } else if (direction === "horizontal") {
      for (let j = y + 1; j < length + y; j += 1) {
        gameBoardTable[x][j] = newShip;
      }
    }
  }

  function getShip(x, y) {
    return gameBoardTable[x][y];
  }

  return { placeShip, getShip };
}

export default gameBoard;
