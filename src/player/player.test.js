import gameBoard from "../gameBoard/gameBoard";
import player from "./player";

test("player object gets created correctly", () => {
  const p = player("Mimmo");
  expect(p.playerName).toBe("Mimmo");
  expect(p.playerGameBoard.verifyEndGame()).toBe(true);
});
