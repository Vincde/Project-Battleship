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
      typeof board[row][column] === "object" &&
      board[row][column].hit === false
    ) {
      board[row][column].newShip.hit();
      board[row][column].hit = true;
      if (board[row][column].newShip.isSunk()) {
        return "Ship has been sunk!";
      }
    } else if (typeof board[row][column] === "undefined") {
      board[row][column] = "miss";
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
