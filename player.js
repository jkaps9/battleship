import { Gameboard } from "./gameboard.js";

class Player {
  constructor(playerType) {
    this.playerType = playerType;
    this.gameboard = new Gameboard();
  }
}

export { Player };
