import "./style.css";
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Player from "./playerConstructor/players";

function newGame() {
  const player1 = new Player("Marco");
  const player2 = new Player("Antonio");

  player1.gameBoard.placeShip(2, 2, 7);
  player1.gameBoard.placeShip(2, 2, 1);
  player1.gameBoard.placeShip(2, 5, 7);
  player1.gameBoard.placeShip(2, 3, 3);
  player1.gameBoard.placeShip(2, 8, 1);
  player1.gameBoard.placeShip(2, 5, 7);

  player2.gameBoard.placeShip(2, 2, 7);
  player2.gameBoard.placeShip(2, 2, 1);
  player2.gameBoard.placeShip(2, 5, 7);
  player2.gameBoard.placeShip(2, 3, 3);
  player2.gameBoard.placeShip(2, 8, 1);
  player2.gameBoard.placeShip(2, 5, 7);
}

newGame();
