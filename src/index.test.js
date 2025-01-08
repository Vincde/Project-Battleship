import gameBoard from "./gameBoard/gameBoard";

test("placeShip function works correctly", () => {
  const GB = gameBoard();
  let result2 = [];

  result2 = GB.placeShip(4, 5, 3, "vertical");

  expect(result2).toEqual([44, 54, 64]);
});
