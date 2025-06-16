import { Player } from "./player.js";
import { Ship } from "./ship.js";

class Game {
  playerOne = new Player("human");
  playerTwo = new Player("computer");

  constructor() {
    this.#predeterminedGrid();
  }

  #predeterminedGrid() {
    const rand = Math.floor(Math.random() * 8);
    const coords = [
      {
        startRow: 0,
        startCol: 0,
        endRow: 0,
        endCol: 4,
      },
      {
        startRow: 4,
        startCol: 1,
        endRow: 4,
        endCol: 4,
      },
      {
        startRow: 6,
        startCol: 7,
        endRow: 8,
        endCol: 7,
      },
      {
        startRow: rand,
        startCol: 9,
        endRow: rand + 2,
        endCol: 9,
      },
    ];

    for (let i = 0; i < coords.length; i++) {
      this.playerOne.gameboard.placeShip(
        coords[i].startRow,
        coords[i].startCol,
        coords[i].endRow,
        coords[i].endCol
      );
      this.playerTwo.gameboard.placeShip(
        coords[i].startRow,
        coords[i].startCol,
        coords[i].endRow,
        coords[i].endCol
      );
    }
  }

  #dumbComputerTurn() {
    const rand1 = Math.floor(Math.random() * 10);
    const rand2 = Math.floor(Math.random() * 10);
    if (
      this.playerOne.gameboard.grid[rand1][rand2] === "m" ||
      this.playerOne.gameboard.grid[rand1][rand2] === "x"
    ) {
      this.#dumbComputerTurn();
    } else {
      this.playerOne.gameboard.receiveAttack(rand1, rand2);
    }
  }

  computerTurn() {
    this.#dumbComputerTurn();
  }

  getWinner() {
    if (this.playerOne.gameboard.allShipsSunk()) return this.playerTwo;
    else if (this.playerTwo.gameboard.allShipsSunk()) return this.playerOne;
    else return null;
  }
}

export { Game };
