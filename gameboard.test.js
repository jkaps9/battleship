import { Gameboard } from "./gameboard.js";

it("Gameboard class exists", () => {
  const gameboard = new Gameboard();
  expect(gameboard).toBeDefined();
});
