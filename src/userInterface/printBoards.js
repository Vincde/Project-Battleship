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

/* ERROR PRESENT, NEEDS TO BE ADJUSTED */
function fillBoardsWithShips(player1, player2) {
  let counterTo99 = 0;
  /* error into writing this */
  const selectPlayer1 = document.querySelectorAll("#gameboard-1 div");
  const selectPlayer2 = document.querySelectorAll("#gameboard-2 div");

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (typeof player1.gameBoard.board[i][j] === "object") {
        selectPlayer1[counterTo99].textContent = "A"; /* temporary value */
      }
      if (typeof player2.gameBoard.board[i][j] === "object") {
        selectPlayer2[counterTo99].textContent = "A";
      }
      counterTo99 += 1;
    }
    counterTo99 += 1;
  }
}

export default printBoards;
export { fillBoardsWithShips };
