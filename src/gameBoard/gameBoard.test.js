import gameBoard from "./gameBoard";

test("placeShip function of gameBoard", () => {
  const newG = gameBoard();
  expect(newG.placeShip(7, 3, 3, "h")).toEqual(true);
  expect(newG.placeShip(7, 3, 3, "v")).toEqual(true);
  expect(newG.placeShip(8, 3, 3, "v")).toEqual(false);
  expect(newG.placeShip(3, 8, 3, "h")).toEqual(false);
});
