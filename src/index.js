import "./style.css";
import Player from "./player/player";
import UI from "./userInterface/UI";

function main() {
  const userInterface = UI();
  userInterface.paintBoards();

  const player1 = Player("Antonio");
  const player2 = Player("franco");

  player1.playerGameBoard.placeShip(0, 2, 3, "horizontal");
  player1.playerGameBoard.placeShip(1, 2, 3, "horizontal");
  player1.playerGameBoard.placeShip(3, 2, 3, "horizontal");
  player1.playerGameBoard.placeShip(2, 2, 3, "horizontal");

  player2.playerGameBoard.placeShip(0, 2, 3, "vertical");
  player2.playerGameBoard.placeShip(0, 3, 3, "vertical");
  player2.playerGameBoard.placeShip(0, 4, 3, "vertical");
  player2.playerGameBoard.placeShip(0, 5, 3, "vertical");

  userInterface.initiateBox(
    player1.playerGameBoard,
    player2.playerGameBoard,
    player2.name
  );
  userInterface.reloadBoard(player1.playerGameBoard, player2.playerGameBoard);

  // Here finishes the positioning phase.
  // now turns have to take over.

  const uiPlayer1 = document.querySelector(".gameBoard__player1");
  const uiPlayer2 = document.querySelector(".gameBoard__player2");
  const uiPlayer1Choice = document.querySelector(".gameBoard__player1__choice");
  const uiPlayer2Choice = document.querySelector(".gameBoard__player2__choice");
  uiPlayer1.style.visibility = "visible";
  uiPlayer1Choice.style.visibility = "visible";
  uiPlayer2.style.visibility = "hidden";
  uiPlayer2Choice.style.visibility = "hidden";
}

main();
