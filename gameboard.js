class Gameboard {
  grid = Array.from({ length: 10 }, () => new Array(10).fill(0));

  placeShip(rowStart, colStart, rowEnd, colEnd) {
    for (let i = rowStart; i <= rowEnd; i++) {
      for (let j = colStart; j <= colEnd; j++) {
        this.grid[i][j] = "s";
      }
    }
  }

  receiveAttack(row, col) {
    if (this.grid[row][col] !== "s") {
      this.grid[row][col] = "m";
    }
  }
}

export { Gameboard };
