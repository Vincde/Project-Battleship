import gameBoard from "../gameBoard/gameBoard";
import player from "./player";

function computer() {
  const playerGameBoard = gameBoard();
  const playerName = null;

  return { playerGameBoard, playerName };
}

export default computer;
