import { Ship } from "./ship";

class Gameboard {
  grid = Array.from({ length: 10 }, () => new Array(10).fill(0));

  placeShip(rowStart, colStart, rowEnd, colEnd) {
    let shipSize = rowEnd - rowStart + colEnd - colStart;
    let ship = new Ship(shipSize);
    for (let i = rowStart; i <= rowEnd; i++) {
      for (let j = colStart; j <= colEnd; j++) {
        this.grid[i][j] = ship;
      }
    }
  }

  receiveAttack(row, col) {
    if (this.grid[row][col] === 0) {
      this.grid[row][col] = "m";
    } else if (this.grid[row][col] !== "m") {
      //not a miss
      this.grid[row][col].hit();
      this.grid[row][col] = "x";
    }
  }
}

export { Gameboard };
