import { Gameboard } from "./gameboard.js";

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
    expect(gameboard.grid[0][0]).toBe("s");
    expect(gameboard.grid[0][1]).toBe("s");
    expect(gameboard.grid[0][2]).toBe("s");
    expect(gameboard.grid[0][3]).toBe("s");
    expect(gameboard.grid[0][4]).toBe("s");
  });
});
