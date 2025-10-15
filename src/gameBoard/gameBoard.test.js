import gameBoard from "./gameBoard";
import ship from "../ship/ship";

jest.mock("./../ship/ship");

test("placeShip saves the correct result", () => {
  const newG = gameBoard();

  const mockShip = { hit: jest.fn(), isSunk: jest.fn(), getLength: jest.fn() };
  ship.mockReturnValue(mockShip);

  newG.placeShip(2, 3, 3, "v");

  expect(ship).toHaveBeenCalledWith(3);

  expect(newG.getBoardElement(2, 3)).toEqual({
    row: 2,
    column: 3,
    ship: mockShip,
    direction: "v",
  });
});

test("receiveAttack correctly sends the attack on the ship", () => {
  const newG = gameBoard();

  const mockShip = { hit: jest.fn(), isSunk: jest.fn(), getLength: jest.fn() };
  ship.mockReturnValue(mockShip);

  newG.placeShip(2, 3, 3, "v");

  newG.receiveAttack(2, 3);
  expect(mockShip.hit).toHaveBeenCalled(); // tecnically this is maybe useless
  // the way it works is that everything gets taken from board array
  // but board array is not seen from here, even if it calls an 'external' object

  newG.receiveAttack(7, 7);
  expect(mockShip.hit).toHaveBeenCalledTimes(1);
});

test("isGameFinished returns false or true correctly", () => {
  const newG = gameBoard();
  const mockShip = {
    hit: jest.fn(),
    getSunk: jest.fn().mockReturnValueOnce(false).mockReturnValue(true),
    getLenght: jest.fn(),
  };

  ship.mockReturnValue(mockShip);

  expect(newG.isGameFinished()).toBe(undefined);
  newG.placeShip(3, 2, 3, "v");
  expect(newG.isGameFinished()).toBe(false);
  newG.receiveAttack(3, 2); // in this case i set up jest for the last shot
  expect(newG.isGameFinished()).toBe(true);
});
