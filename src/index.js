/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import "./style.css";
import Player from "./playerConstructor/players";
import printBoards, { fillBoardsWithShips } from "./userInterface/printBoards";

function newGame() {
  printBoards();
  const player1 = new Player("Marco");
  const player2 = new Player("Antonio");

  player1.gameBoard.placeShip(2, 2, 7, "horizontal");
  player1.gameBoard.placeShip(2, 2, 1, "horizontal");
  player1.gameBoard.placeShip(2, 5, 7, "horizontal");
  player1.gameBoard.placeShip(2, 3, 3, "horizontal");
  player1.gameBoard.placeShip(2, 8, 1, "horizontal");
  player1.gameBoard.placeShip(2, 5, 7, "horizontal");

  player2.gameBoard.placeShip(2, 2, 7, "horizontal");
  player2.gameBoard.placeShip(2, 2, 1, "horizontal");
  player2.gameBoard.placeShip(2, 5, 7, "horizontal");
  player2.gameBoard.placeShip(2, 3, 3, "horizontal");
  player2.gameBoard.placeShip(2, 8, 1, "horizontal");
  player2.gameBoard.placeShip(2, 5, 7, "horizontal");
  fillBoardsWithShips(player1, player2);
}

newGame();
