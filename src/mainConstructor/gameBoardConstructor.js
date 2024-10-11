// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Ship from "./shipConstructor";

class gameBoard {
  constructor() {
    this.board = [[]];
  }

  placeShip(length, row, column, direction) {
    const newShip = new Ship(length, 0, false);
    /* Here we create the ship object */

    if (direction === "vertical") {
      // If ship needs to be printed in vertical order
      // this code changes only the column
      for (let i = column; i < length + column; i += 1) {
        this.board[row][i] = newShip;
      }
    } else if (direction === "horizontal") {
      // If ship needs to be printed in horizontal order
      // this code changes only the row
      for (let j = row; j < length + row; j += 1) {
        this.board[j][column] = newShip;
      }
    }
  }
}

export default gameBoard;
