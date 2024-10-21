function printBoards() {
  const selectPlayer1 = document.querySelector("#gameboard-1");
  const selectPlayer2 = document.querySelector("#gameboard-2");

  for (let i = 0; i < 100; i += 1) {
    const newDivPlayer1 = document.createElement("div");
    const newDivPlayer2 = document.createElement("div");
    newDivPlayer1.classList.add("boardSquares");
    newDivPlayer2.classList.add("boardSquares");

    selectPlayer1.appendChild(newDivPlayer1);
    selectPlayer2.appendChild(newDivPlayer2);
  }
}

/* function fillBoardsWithShips(player1, player2) {} */

export default printBoards;
