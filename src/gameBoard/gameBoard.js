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

  function getBoardElement(row, column) {
    return board.find((el) => el.row === row && el.column === column);
  }

  function receiveAttack(row, column) {
    // tests needed!
    let element = board.find((el) => el.row === row && el.column === column);
    if (element !== undefined) {
      element.ship.hit();
    }
  }

  return {
    placeShip,
    getBoardElement,
    receiveAttack,
  };
}
