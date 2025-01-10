import gameBoard from "./gameBoard/gameBoard";

test("placeShip function works correctly", () => {
  const GB = gameBoard();

  GB.placeShip(0, 2, 3, "horizontal");

  expect(typeof GB.getShip(0, 2)).toBe("object");
  expect(typeof GB.getShip(0, 3)).toBe("object");
  expect(typeof GB.getShip(0, 4)).toBe("object");
  expect(GB.getShip(0, 5)).toBe(undefined);

  GB.placeShip(1, 2, 3, "vertical");
  expect(typeof GB.getShip(1, 2)).toBe("object");
  expect(typeof GB.getShip(2, 2)).toBe("object");
  expect(typeof GB.getShip(3, 2)).toBe("object");
  expect(GB.getShip(4, 2)).toBe(undefined);
});
