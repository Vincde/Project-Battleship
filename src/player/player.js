import gameBoard from "../gameBoard/gameBoard";

export default function player(name = "computer") {
  // careful: if i insert computer as my username it could be problematic
  let playerName = name;
  const playerGameBoard = gameBoard();

  return { playerGameBoard, playerName };
}
