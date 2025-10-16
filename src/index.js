import "./style.css";
import "./css/score.css";
import "./css/logo.css";
import "./css/gameboard.css";
import player from "./player/player";
import ui from "./userInterface/UI";
import computer from "./player/computer";

const UI = ui();
UI.chooseNumberOfPlayers().then((numPlayers) => {
  UI.createGrids();
  let player1;
  let player2;
  if (numPlayers === 1) {
    player1 = player("User");
    player2 = computer();
  } else {
    player1 = player("User");
    player2 = player("User2");
  }

  player1.playerGameBoard.placeShip(3, 4, 3, "h");
  player1.playerGameBoard.placeShip(6, 3, 3, "v");
  player1.playerGameBoard.placeShip(1, 8, 2, "v");
  player1.playerGameBoard.placeShip(7, 5, 4, "h");

  player2.playerGameBoard.placeShip(7, 1, 5, "h");
  player2.playerGameBoard.placeShip(3, 3, 5, "v");
  player2.playerGameBoard.placeShip(1, 5, 2, "h");
  player2.playerGameBoard.placeShip(7, 5, 4, "h");

  UI.showShips(player1.playerGameBoard, player2.playerGameBoard);
});
