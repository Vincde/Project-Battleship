import gameBoard from "../gameBoard/gameBoard";

function computer() {
  const playerGameBoard = gameBoard();

  return { playerGameBoard };
}

export default computer;
