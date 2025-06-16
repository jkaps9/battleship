import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  it("class exists", () => {
    expect(gameboard).toBeDefined();
  });

  it("grid is 10x10", () => {
    expect(gameboard.grid.length).toBe(10);
    for (let i = 0; i < gameboard.grid.length; i++) {
      expect(gameboard.grid[i].length).toBe(10);
    }
  });

  it("grid instantiates full of zeros", () => {
    for (let i = 0; i < gameboard.grid.length; i++) {
      for (let j = 0; j < gameboard.grid.length; j++) {
        expect(gameboard.grid[i][j]).toBe(0);
      }
    }
  });

  it("can place ships in the grid", () => {
    gameboard.placeShip(0, 0, 0, 4);
    expect(gameboard.grid[0][0]).toBeInstanceOf(Ship);
    expect(gameboard.grid[0][1]).toBeInstanceOf(Ship);
    expect(gameboard.grid[0][2]).toBeInstanceOf(Ship);
    expect(gameboard.grid[0][3]).toBeInstanceOf(Ship);
    expect(gameboard.grid[0][4]).toBeInstanceOf(Ship);
  });

  it("can record a miss", () => {
    gameboard.receiveAttack(5, 5);
    expect(gameboard.grid[5][5]).toBe("m");
  });

  it("sends hit function to ship on hit", () => {
    // currently checking if ships hit counter has incremented
    // but I should really be just checking to see if hit function is called
    // TODO: figure out how to do above
    gameboard.placeShip(0, 0, 0, 4);
    const ship = gameboard.grid[0][2];
    const hits = ship.numberOfHits;
    gameboard.receiveAttack(0, 2);
    expect(ship.numberOfHits).toBe(hits + 1);
  });
});
