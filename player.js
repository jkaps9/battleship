import { Gameboard } from "./gameboard";

class Player {
  constructor(playerType) {
    this.playerType = playerType;
    this.gameboard = new Gameboard();
  }
}

export { Player };
