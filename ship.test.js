import { Ship } from "./ship.js";

it("Ship class exists", () => {
  const ship = new Ship();
  expect(ship).toBeDefined();
});

it("Ship class has a size", () => {
  const ship = new Ship();
  expect(ship).toHaveProperty("size");
});

it("Ship class has a hit counter", () => {
  const ship = new Ship();
  expect(ship).toHaveProperty("numberOfHits");
});

it("Ship class has a boolean whether it is sunk", () => {
  const ship = new Ship();
  expect(ship).toHaveProperty("isSunk");
});

it("Ship can increment hits", () => {
  const ship = new Ship();
  expect(ship.numberOfHits).toBe(0);
  ship.hit();
  expect(ship.numberOfHits).toBe(1);
});

it("Ship calculates whether it is sunk", () => {
  const ship = new Ship();
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
