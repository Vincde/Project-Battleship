import ship from "./ship";

test("Ship returns correct length", () => {
  const newShip = ship(3);
  expect(newShip.getLength()).toBe(3);
});

test("Ship returns sunk status correctly", () => {
  const newShip = ship(2);

  expect(newShip.getSunk()).toBe(false);
  newShip.hit();
  expect(newShip.getSunk()).toBe(false);
  newShip.hit();
  expect(newShip.getSunk()).toBe(true);
});
