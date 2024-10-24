// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Ship from "./shipConstructor";

function verifyLength(length, row, column, direction) {
  if (length > 5 || length < 2) return true;

  if (row > 9 || row < 0) return true;
  if (column > 9 || column < 0) return true;

  // we need a way to distinguish between vertical and horizontal
  // so that when for example a ship length 2 gets added
  // and printed in a horizontal order
  // it prints as expected not verifying that it goes out of bounds vertically
  if (direction === "horizontal") {
    if (column + length > 10) return true;
  } else if (direction === "vertical") {
    if (row + length > 10) return true;
  }

  return false;
}

class GameBoard {
  constructor() {
    this.board = [
      [undefined],
      [undefined],
      [undefined],
      [undefined],
      [undefined],
      [undefined],
      [undefined],
      [undefined],
      [undefined],
      [undefined],
    ];
    this.missedShots = [
      [undefined],
      [undefined],
      [undefined],
      [undefined],
      [undefined],
      [undefined],
      [undefined],
      [undefined],
      [undefined],
      [undefined],
    ]; /* this variable needs to store the empty points
                                missed during an attack */
  }

  placeShip(length, row, column, direction) {
    const newShip = new Ship(length, 0, false);
    /* Here we create the ship object */
    if (verifyLength(length, row, column, direction) === true) return false;

    if (direction === "vertical") {
      // If ship needs to be printed in vertical order
      // this code changes only the column
      for (let i = row; i < length + row; i += 1) {
        this.board[i][column] = newShip;
      }
    } else if (direction === "horizontal") {
      // If ship needs to be printed in horizontal order
      // this code changes only the row
      for (let j = column; j < length + column; j += 1) {
        this.board[row][j] = newShip;
      }
    }

    return true;
  }

  recieveAttack(coordinateX, coordinateY) {
    if (this.board[coordinateX][coordinateY]) {
      this.board[coordinateX][coordinateY].hit();
      this.board[coordinateX][coordinateY] = undefined;
      // this should change
      // the value of the single ship hit
    } else {
      this.missedShots[coordinateX][coordinateY] =
        "empty"; /* this could just be null but to get the point the value is 'empty' */
    }
    this.verifyIfShipsAreAllSunk();
  }

  verifyIfShipsAreAllSunk() {
    for (let i = 0; i < this.board.length; i += 1) {
      for (let j = 0; j < this.board.length; j += 1) {
        if (typeof this.board[i][j] === "object") return false;
      }
    }
    return true;
  }
}

export default GameBoard;
