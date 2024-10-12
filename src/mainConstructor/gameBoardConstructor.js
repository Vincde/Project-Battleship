// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Ship from "./shipConstructor";

class gameBoard {
  constructor() {
    this.board = [[]];
    this.missedShots = [[]]; /* this variable needs to store the empty points
                                missed during an attack */
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
  }
}

export default gameBoard;
