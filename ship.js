class Ship {
  numberOfHits = 0;
  sunk = false;

  constructor(size = 1) {
    this.size = size;
  }

  hit() {
    this.numberOfHits++;
  }

  isSunk() {
    return this.numberOfHits >= this.size;
  }
}

export { Ship };
