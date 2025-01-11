import "./style.css";
import Player from "./player/player";
import UI from "./userInterface/modules";

function main() {
  const userInterface = UI();
  userInterface.paintBoards();

  const player1 = Player("Antonio");
  const player2 = Player();

  player1.playerGameBoard.placeShip(0, 2, 3, "horizontal");
  player1.playerGameBoard.placeShip(0, 2, 3, "horizontal");
  player1.playerGameBoard.placeShip(0, 2, 3, "horizontal");
  player1.playerGameBoard.placeShip(0, 2, 3, "horizontal");

  player2.playerGameBoard.placeShip(0, 2, 3, "horizontal");
  player2.playerGameBoard.placeShip(0, 2, 3, "horizontal");
  player2.playerGameBoard.placeShip(0, 2, 3, "horizontal");
  player2.playerGameBoard.placeShip(0, 2, 3, "horizontal");
}

main();
