import ship from "../ship/ship";

export default function gameBoard() {
  const board = [];
  const missedAttacks = [];

  function placeShip(row, column, length, direction) {
    const newShip = ship(length);

    for (let i = 0; i < length; i += 1) {
      if (direction === "v") {
        board.push({
          row: row + i,
          column,
          ship: newShip,
          direction,
        });
      } else {
        board.push({
          row,
          column: column + i,
          ship: newShip,
          direction,
        });
      }
    }
  }

  function getBoardElement(row, column) {
    return board.find((el) => el.row === row && el.column === column);
  }

  function getMissedElement(row, column) {
    return missedAttacks.find((el) => el.row === row && el.column === column);
  }

  function receiveAttack(row, column) {
    const element = board.indexOf(
      board.find((el) => el.row === row && el.column === column)
    );
    if (element !== -1) {
      board[element].ship.hit();
      return true;
    }
    missedAttacks.push({ row, column });
    return false;
  }

  function isGameFinished() {
    if (board.length > 0) {
      for (let i = 0; i < board.length; i += 1) {
        if (board[i].ship.getSunk()) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  return {
    placeShip,
    getBoardElement,
    receiveAttack,
    getMissedElement,
    isGameFinished,
  };
}
