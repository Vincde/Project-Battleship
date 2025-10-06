import gameBoard from "../gameBoard/gameBoard";

export default function player(name) {
  let playerName = name;
  const playerGameBoard = gameBoard();

  return { playerGameBoard, playerName };
}
