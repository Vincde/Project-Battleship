import ship from "../ship/ship";

export default function gameBoard() {
  let board = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => undefined)
  );
  let missedAttacks = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => undefined)
  );

  function placeShip(row, column, length, direction) {
    const newShip = ship(length);

    if (verifyDimension(row, column, length, direction)) {
      if (direction === "v") {
        for (let i = 0; i < length; i++) {
          board[row + i - 1][column - 1] = { ship: newShip, hit: false };
        }
      } else if (direction === "h") {
        for (let i = 0; i < length; i++) {
          board[row - 1][column + i - 1] = { ship: newShip, hit: false };
        }
      }
      return true;
    } else {
      return false;
    }
  }

  function receiveAttack(row, column) {
    if (verifyDimension(row, column)) {
      if (
        typeof board[row - 1][column - 1] === "object" &&
        board[row - 1][column - 1].hit === false
      ) {
        board[row - 1][column - 1].ship.hit();
        board[row - 1][column - 1].hit = true;
        if (board[row - 1][column - 1].ship.isSunk()) {
          return "Ship has been sunk!";
        }
      } else if (typeof board[row - 1][column - 1] === "undefined") {
        board[row][column] = "miss";
      }
    }
  }

  function verifyDimension(row, column, length = 0, direction = 0) {
    if (row > 10 || row <= 0) return false;

    if (column > 10 || column <= 0) return false;

    if (direction === "v") {
      if (row + length > 10 || row + length <= 0) return false;
    } else if (direction === "h") {
      if (column + length > 10 || column + length <= 0) return false;
    }

    return true;
  }

  function setMissedAttack(row, column, status) {
    if (verifyDimension(row, column)) {
      missedAttacks[row][column] = { hit: status, sunk: false };
    }
  }

  function getMissedAttack(row, column) {
    return missedAttacks[row][column];
  }

  function getBoardElement(row, column) {
    return board[row][column];
  }

  function verifyEndGame() {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (typeof board[i][j] === "object" && board[i][j].hit === false) {
          return false;
        }
      }
    }
    return true;
  }

  return {
    placeShip,
    receiveAttack,
    setMissedAttack,
    getMissedAttack,
    getBoardElement,
    verifyEndGame,
  };
}
