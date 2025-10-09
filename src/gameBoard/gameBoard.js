import ship from "../ship/ship";

export default function gameBoard() {
  let board = [];
  let missedAttacks = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => undefined)
  );

  function placeShip(row, column, length, direction) {
    const newShip = ship(length);

    board.push({
      row: row,
      column: column,
      ship: newShip,
      direction: direction,
    });
  }

  function receiveAttack(row, column) {
    // todo for attack
  }

  function setMissedAttack(row, column, status) {
    if (verifyDimension(row, column)) {
      missedAttacks[row - 1][column - 1] = { hit: status };
    }
  }

  function getMissedAttack(row, column) {
    return missedAttacks[row][column];
  }

  function getBoardElement(row, column) {
    return board.find((el) => el.row === row && el.column === column);
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
