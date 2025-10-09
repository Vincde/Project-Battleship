import gameBoard from "./gameBoard";

test("placeShip saves the correct result", () => {
  const newG = gameBoard();
  jest.mock("./../ship/ship", () => {
    return jest.fn((length) => ({
      hit: jest.fn(),
      isSunk: jest.fn().mockReturnValue(false),
      getLength: jest.fn().mockReturnValue(3),
    }));
  });

  newG.placeShip(2, 3, 3, "v");
  expect(newG.getBoardElement(2, 3)).toContain({ row });

  expect(newG.getBoardElement(2, 3)).toContain({ column });
});
