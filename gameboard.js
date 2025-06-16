class Gameboard {
  // Create a 10 x 10 grid on instantiation
  // Fill the grid with zeros to represent blanks

  grid = Array.from({ length: 10 }, () => new Array(10).fill(0));
}

export { Gameboard };
