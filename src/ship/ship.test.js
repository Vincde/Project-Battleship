import ship from "./ship";

test("Ship returns sunk status correctly", () => {
  const newShip = ship(2);

  expect(newShip.isSunk()).toBe(false);
  newShip.hit();
  expect(newShip.isSunk()).toBe(false);
  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
});
