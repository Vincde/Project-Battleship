import gameBoard from "../gameBoard/gameBoard";

export default function player(name) {
  // careful: if i insert computer as my username it could be problematic
  const playerName = name;
  const playerGameBoard = gameBoard();

  return { playerGameBoard, playerName };
}
