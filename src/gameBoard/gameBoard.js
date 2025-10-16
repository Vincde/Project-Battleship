import ship from "../ship/ship";

export default function gameBoard() {
  let board = [];
  let missedAttacks = [];

  function placeShip(row, column, length, direction) {
    const newShip = ship(length);

    for (let i = 0; i < length; i++) {
      if (direction === "v") {
        board.push({
          row: row + i,
          column: column,
          ship: newShip,
          direction: direction,
        });
      } else {
        board.push({
          row: row,
          column: column + i,
          ship: newShip,
          direction: direction,
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
    let element = board.indexOf(
      board.find((el) => el.row === row && el.column === column)
    );
    if (element !== -1) {
      board[element].ship.hit();
      return true;
    } else {
      missedAttacks.push({ row: row, column: column });
      return false;
    }
  }

  function isGameFinished() {
    if (board.length > 0) {
      for (const el of board) {
        if (!el.ship.getSunk()) {
          return false;
        }
      }
      return true;
    }
  }

  return {
    placeShip,
    getBoardElement,
    receiveAttack,
    getMissedElement,
    isGameFinished,
  };
}
