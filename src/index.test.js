import gameBoard from "./mainConstructor/gameBoardConstructor.js";

test("gameBoard works fine", () => {
  const gg = new gameBoard();
  gg.board[0] = 1;
  expect(gg.board[0]).toBe(1);
});
// verification test for developer purposes

test("gameBoard places ships correctly", () => {
  const ng = new gameBoard();

  ng.placeShip(3, 2, 4, "horizontal");
  expect(typeof ng.board[2][4]).toBe("object");
});

test("GameBoard attacks ship correctly", () => {
  const ng = new gameBoard();

  ng.placeShip(3, 2, 4, "horizontal");
  ng.recieveAttack(2, 4);
  ng.recieveAttack(2, 8);
  expect(typeof ng.board[2][4]).toBe("undefined");
  expect(ng.missedShots[2][8]).toBe("empty");
});
