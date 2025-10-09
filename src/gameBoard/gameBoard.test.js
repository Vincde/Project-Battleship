import gameBoard from "./gameBoard";
import ship from "../ship/ship";

jest.mock("./../ship/ship");

test("placeShip saves the correct result", () => {
  const newG = gameBoard();

  const mockShip = { hit: jest.fn(), isSunk: jest.fn(), getLength: jest.fn() };
  ship.mockReturnValue(mockShip);

  newG.placeShip(2, 3, 3, "v");

  expect(typeof newG.getBoardElement(2, 3)).toBe("object");
  expect(ship).toHaveBeenCalledWith(3);

  expect(newG.getBoardElement(2, 3)).toEqual({
    row: 2,
    column: 3,
    ship: mockShip,
    direction: "v",
  });
});
