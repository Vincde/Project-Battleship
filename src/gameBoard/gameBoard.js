import ship from "../ship/ship";

export default function gameBoard() {
  let board = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => 0)
  );

  function placeShip(row, column, length, direction) {
    const newShip = ship(length);

    if (verifyDimension(row, column, length, direction)) {
      if (direction === "v") {
        for (let i = 0; i < length; i++) {
          board[row + i][column] = { ship: newShip, hit: false };
        }
      } else if (direction === "h") {
        for (let i = 0; i < length; i++) {
          board[row][column + i] = { ship: newShip, hit: false };
        }
      }
      return true;
    } else {
      return false;
    }
  }

  function receiveAttack(row, column) {
    if (
      typeof gameBoard[row][column] === "object" &&
      gameBoard[row][column].hit === false
    ) {
      gameBoard[row][column].newShip.hit();
      gameBoard[row][column].hit = true;
      if (gameBoard[row][column].newShip.isSunk()) {
        return "Ship has been sunk!";
      }
    } else if (typeof gameBoard[row][column] === "undefined") {
      gameBoard[row][column] = "miss";
    }
  }

  function verifyDimension(row, column, length, direction) {
    if (row > 10 || row <= 0) return false;

    if (column > 10 || column <= 0) return false;

    if (direction === "v") {
      if (row + length > 10 || row + length <= 0) return false;
    } else if (direction === "h") {
      if (column + length > 10 || column + length <= 0) return false;
    }

    return true;
  }

  return { placeShip, receiveAttack };
}
