import { Player } from "./player.js";
import { Ship } from "./ship.js";

class Game {
  constructor() {
    this.players = [new Player("human"), new Player("computer")];
    this.#predeterminedGrid();
  }

  #predeterminedGrid() {
    const rand = Math.floor(Math.random() * 8);
    const coords = [
      // {
      //   startRow: 0,
      //   startCol: 0,
      //   endRow: 0,
      //   endCol: 4,
      // },
      // {
      //   startRow: 4,
      //   startCol: 1,
      //   endRow: 4,
      //   endCol: 4,
      // },
      // {
      //   startRow: 6,
      //   startCol: 7,
      //   endRow: 8,
      //   endCol: 7,
      // },
      {
        startRow: rand,
        startCol: rand,
        endRow: rand + 2,
        endCol: rand,
      },
    ];

    for (let p = 0; p < this.players.length; p++) {
      for (let i = 0; i < coords.length; i++) {
        this.players[p].gameboard.placeShip(
          coords[i].startRow,
          coords[i].startCol,
          coords[i].endRow,
          coords[i].endCol
        );
      }
    }
  }

  #dumbComputerTurn() {
    //computer is always player 2 for now
    const rand1 = Math.floor(Math.random() * 10);
    const rand2 = Math.floor(Math.random() * 10);
    if (
      this.players[0].gameboard.grid[rand1][rand2] === "m" ||
      this.players[0].gameboard.grid[rand1][rand2] === "x"
    ) {
      this.#dumbComputerTurn();
    } else {
      this.players[0].gameboard.receiveAttack(rand1, rand2);
    }
  }

  computerTurn() {
    this.#dumbComputerTurn();
  }

  getWinner() {
    if (this.players[0].gameboard.allShipsSunk()) return this.players[1];
    else if (this.players[1].gameboard.allShipsSunk()) return this.players[0];
    else return null;
  }

  getBoards() {
    return [this.players[0].gameboard.grid, this.players[1].gameboard.grid];
  }
}

export { Game };
