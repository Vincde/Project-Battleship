import "./style.css";
import Player from "./player/player";
import UI from "./userInterface/UI";

function main() {
  const userInterface = UI();
  userInterface.paintBoards();

  const player1 = Player("Antonio");
  const player2 = Player();

  player1.playerGameBoard.placeShip(0, 2, 3, "horizontal");
  player1.playerGameBoard.placeShip(1, 2, 3, "horizontal");
  player1.playerGameBoard.placeShip(3, 2, 3, "horizontal");
  player1.playerGameBoard.placeShip(2, 2, 3, "horizontal");

  player2.playerGameBoard.placeShip(0, 2, 3, "vertical");
  player2.playerGameBoard.placeShip(0, 3, 3, "vertical");
  player2.playerGameBoard.placeShip(0, 4, 3, "vertical");
  player2.playerGameBoard.placeShip(0, 5, 3, "vertical");
}

main();
