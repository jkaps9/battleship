class Ship {
  size = 1;
  numberOfHits = 0;
  sunk = false;

  hit() {
    this.numberOfHits++;
  }

  isSunk() {
    return this.numberOfHits >= this.size;
  }
}

export { Ship };
