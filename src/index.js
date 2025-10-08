import "./style.css";
import "./css/score.css";
import "./css/logo.css";
import "./css/gameboard.css";
import player from "./player/player";
import ui from "./userInterface/UI";

const UI = ui();
UI.chooseNumberOfPlayers().then((numPlayers) => {
  UI.createGrids();
  let player1;
  let player2;
  if (numPlayers === 1) {
    player1 = player("User");
    player2 = player("computer");
  } else {
    player1 = player("User");
    player2 = player("User2");
  }

  player1.playerGameBoard.placeShip(3, 4, 3, "h");
  player1.playerGameBoard.receiveAttack(3, 4);
  player1.playerGameBoard.receiveAttack(3, 5);
  player1.playerGameBoard.receiveAttack(3, 6);

  player2.playerGameBoard.setMissedAttack(3, 4, true);
  player2.playerGameBoard.setMissedAttack(3, 5, true);
  player2.playerGameBoard.setMissedAttack(3, 6, true);

  UI.reload(player1, player2);
  UI.attackShipsEvent(player1, player2);
});
