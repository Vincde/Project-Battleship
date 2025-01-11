import Ship from "../ship/ship";

function gameBoard() {
  const gameBoardTable = [[], [], [], [], [], [], [], [], [], []];

  function verifyData(x, y, length, direction) {
    // i need to verify if all the data are correct
    // and don't go into a not acceptable state

    if (x > 9 || x < 0 || y > 9 || y < 0 || length < 0 || length > 5) {
      // i need a method to verify if the inserted data are incorrect
      return false;
    }

    if (direction !== "horizontal" && direction !== "vertical") {
      // verify if direction is correct
      // (theorically this shouldn't be added as most probably there will be only 2 options)
      return false;
    }

    if (direction === "horizontal") {
      if (length + y - 1 > 9) return false;

      for (let i = y; i < y + length - 1; i += 1) {
        if (typeof gameBoardTable[x][i] === "object") return false;
      }
    } else if (direction === "vertical") {
      if (length + x - 1 > 9) return false;

      for (let i = x; i < x + length - 1; i += 1) {
        if (typeof gameBoardTable[i][y] === "object") return false;
      }
    }

    return true;
  }

  function placeShip(x, y, length, direction) {
    if (verifyData(x, y, length, direction) === true) {
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
    } else {
      return false;
    }

    return true;
  }

  function getShip(x, y) {
    return gameBoardTable[x][y];
  }

  function allShipsHaveBeenSunk() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (typeof gameBoardTable[i][j] === "object") return false;
      }
    }
    return true;
  }

  function clearAll() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        gameBoardTable[i][j] = undefined;
      }
    }
  }

  function recieveAttack(x, y) {
    if (x < 0 || x > 9 || y < 0 || y > 9) return false;

    if (typeof gameBoardTable[x][y] === "object") {
      gameBoardTable[x][y].hit();
      gameBoardTable[x][y] = undefined;
      if (allShipsHaveBeenSunk() === true) {
        clearAll();
      }
      return true;
    }
    gameBoardTable[x][y] = "miss";

    return false;
  }

  return { placeShip, getShip, recieveAttack };
}

export default gameBoard;
