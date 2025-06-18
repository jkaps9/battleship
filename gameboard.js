import { Ship } from "./ship.js";

class Gameboard {
  grid = Array.from({ length: 10 }, () => new Array(10).fill(0));

  placeShip(rowStart, colStart, rowEnd, colEnd) {
    let shipSize = rowEnd - rowStart + colEnd - colStart + 1;
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
    } else if (this.grid[row][col] !== "m" && this.grid[row][col] !== "x") {
      //not a miss
      this.grid[row][col].hit();
      this.grid[row][col] = "x";
    }
  }

  allShipsSunk() {
    const reduced = this.grid.filter((arr) => {
      return (
        arr.filter((value) => {
          return value instanceof Ship;
        }).length > 0
      );
    });
    return reduced.length === 0;
  }

  checkCollision(rowStart, colStart, rowEnd, colEnd) {
    //untested
    for (let i = rowStart; i <= rowEnd; i++) {
      for (let j = colStart; j <= colEnd; j++) {
        if (this.grid[i][j] instanceof Ship) return true;
      }
    }
    return false;
  }

  clearGrid() {
    //untested
    this.grid = Array.from({ length: 10 }, () => new Array(10).fill(0));
  }
}

export { Gameboard };
