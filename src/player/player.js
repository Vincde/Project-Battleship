import gameBoard from "../gameBoard/gameBoard";

function Player(name = "computer") {
  const playerGameBoard = gameBoard();

  return { name, playerGameBoard };
}

export default Player;
