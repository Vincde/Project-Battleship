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
  UI.showBoardEvent();
  let player1;
  let player2;
  if (numPlayers === 1) {
    player1 = player("User");
    player2 = computer();
  } else {
    player1 = player("User");
    player2 = player("User2");
  }

  UI.placeShipsOnBoard(player1, player2).then(() => {
    UI.showShips(player1.playerGameBoard, player2.playerGameBoard);
    UI.attackEvent(player1, player2);
    console.log("done");
  });
});
