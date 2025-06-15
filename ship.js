class Ship {
  size = 0;
  numberOfHits = 0;
  isSunk = false;

  hit() {
    this.numberOfHits++;
  }
}

export { Ship };
