import GameBoard from "./mainConstructor/gameBoardConstructor.js";
import Player from "./playerConstructor/players.js";

test("gameBoard works fine", () => {
  const gg = new GameBoard();
  gg.board[0] = 1;
  expect(gg.board[0]).toBe(1);
});
// verification test for developer purposes

test("gameBoard places ships correctly", () => {
  const ng = new GameBoard();

  ng.placeShip(3, 2, 4, "horizontal");
  expect(typeof ng.board[2][4]).toBe("object");
});

test("GameBoard attacks ship correctly", () => {
  const ng = new GameBoard();

  ng.placeShip(3, 2, 4, "horizontal");
  ng.recieveAttack(2, 4);
  ng.recieveAttack(2, 8);
  expect(typeof ng.board[2][4]).toBe("undefined");
  expect(ng.missedShots[2][8]).toBe("empty");
});

test("verifyIfShipsAreAllSunk works correctly", () => {
  const ng = new GameBoard();

  ng.placeShip(3, 2, 4, "horizontal");
  ng.recieveAttack(2, 4);
  ng.recieveAttack(2, 5);
  ng.recieveAttack(2, 6);
  expect(ng.verifyIfShipsAreAllSunk()).toBe(true);
});

test("player class inserts the right name if undefined or not", () => {
  const genericPlayer = new Player("hello");

  expect(genericPlayer.name).toBe("hello");

  const genericPlayer2 = new Player();

  expect(genericPlayer2.name).toBe("computer");
});
