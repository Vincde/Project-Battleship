import gameBoard from "./gameBoard";

test("placeShip saves the correct result", () => {
  const newG = gameBoard();

  newG.placeShip(2, 3, 3, "v");
  expect(newG.getBoardElement(2, 3)).toContain({ row });

  expect(newG.getBoardElement(2, 3)).toContain({ column });
});
