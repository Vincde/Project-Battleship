import gameBoard from "../gameBoard/gameBoard";
import player from "./player";

function computer() {
  const playerGameBoard = gameBoard();
  const playerName = null;
  const attacks = [];

  function randomizeAttack() {
    let random;

    do {
      random = Math.floor(Math.random() * 100);
    } while (attacks.includes(random));

    attacks.push(random);
    return random;
  }

  return { playerGameBoard, playerName, randomizeAttack };
}

export default computer;
