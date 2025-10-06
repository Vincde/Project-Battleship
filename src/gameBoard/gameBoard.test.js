import gameBoard from "./gameBoard";

test("placeShip function of gameBoard", () => {
  const newG = gameBoard();
  expect(newG.placeShip(7, 3, 3, "h")).toEqual(true);
  expect(newG.placeShip(7, 3, 3, "v")).toEqual(true);
  expect(newG.placeShip(8, 3, 3, "v")).toEqual(false);
  expect(newG.placeShip(3, 8, 3, "h")).toEqual(false);
});

test("receiveAttack returns correct values", () => {
  const newG = gameBoard();

  newG.placeShip(7, 3, 3, "h");
  expect(newG.receiveAttack(7, 3)).toBe(undefined);
  expect(newG.receiveAttack(2, 3)).toBe(undefined);
  newG.receiveAttack(7, 4);
  expect(newG.receiveAttack(7, 5)).toBe("Ship has been sunk!");
});

test("getMissedAttacks and setMissedAttacks", () => {
  const newG = gameBoard();
  newG.setMissedAttack(2, 4, false);
  newG.setMissedAttack(7, 3, true);
  expect(newG.getMissedAttack(2, 4)).toEqual({ hit: false });
  expect(newG.getMissedAttack(7, 3)).toEqual({ hit: true });
  expect(newG.getMissedAttack(8, 1)).toBe(undefined);
});

test("verify endGame function returns correct ending", () => {
  const newG = gameBoard();
  newG.placeShip(8, 3, 3, "h");
  newG.receiveAttack(8, 3);
  expect(newG.verifyEndGame()).toBe(false);
  newG.receiveAttack(8, 4);
  expect(newG.verifyEndGame()).toBe(false);
  newG.receiveAttack(8, 5);
  expect(newG.verifyEndGame()).toBe(true);
});
