function gameBoard() {
  function placeShip(x, y, length, direction) {
    let count = 0;
    const returningPos = [];
    for (let i = 0; i < x; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        count += 1;
      }
    }
    count += y - 1;

    if (direction === "horizontal") {
      for (let i = 0; i < length; i += 1) {
        returningPos.push(count);
        count += 1;
      }
    } else if (direction === "vertical") {
      for (let w = 0; w < length; w += 1) {
        returningPos.push(count);
        count += 10;
      }
    }

    count = 0;

    return returningPos;
  }

  return { placeShip };
}

export default gameBoard;
