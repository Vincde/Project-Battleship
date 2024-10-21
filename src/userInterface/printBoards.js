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
  /* error into writing this */
  const selectPlayer1 = document.querySelectorAll("#gameboard-1 div");
  const selectPlayer2 = document.querySelectorAll("#gameboard-2 div");

  for (let i = 0; i < 99; i += 1) {
    if (typeof player1.gameBoard.board[i] === "object") {
      selectPlayer1[i].textContent = "a"; /* temporary value */
    }
    if (typeof player2.gameBoard.board[i] === "object") {
      selectPlayer2[i].textContent = "a";
    }
  }
}

export default printBoards;
export { fillBoardsWithShips };
