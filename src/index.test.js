import gameBoard from "./mainConstructor/gameBoardConstructor.js";

test("gameBoard works fine", () => {
  const gg = new gameBoard();
  gg.board[0] = 1;
  expect(gg.board[0]).toBe(1);
});
// verification test for developer purposes

test("gameBoard places ships fin");
