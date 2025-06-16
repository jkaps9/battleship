import { Player } from "./player.js";
import { Ship } from "./ship.js";

class Game {
  constructor() {
    this.players = [new Player("human"), new Player("computer")];
    // this.#predeterminedGrid();
    this.#randomizedGrid();
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

  #randomizedGrid() {
    // one ship of each type (lenghts of 5, 4 , 3, 3, 2)
    // get random starting coordinates for each
    // get random orientation (0/1)
    // ensure ships doesn't intersect
    const lengths = [5, 4, 3, 3, 2];

    let currLength = lengths.shift();

    // 0 = horizontal; 1 = vertical
    let orientation = Math.round(Math.random());

    let row = Math.floor(
      Math.random() * (orientation === 0 ? 10 - currLength : 10)
    );
    let col = Math.floor(
      Math.random() * (orientation === 1 ? 10 - currLength : 10)
    );
    this.players[0].gameboard.placeShip(
      row,
      col,
      orientation === 0 ? row + currLength - 1 : row,
      orientation === 1 ? col + currLength - 1 : col
    );
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
      this.playRound(rand1, rand2, 0);
    }
  }

  computerTurn() {
    this.#dumbComputerTurn();
  }

  #getWinner() {
    if (this.players[0].gameboard.allShipsSunk()) return this.players[1];
    else if (this.players[1].gameboard.allShipsSunk()) return this.players[0];
    else return null;
  }

  getBoards() {
    return [this.players[0].gameboard.grid, this.players[1].gameboard.grid];
  }

  playRound(row, column, playerIndex) {
    // the "active" player is actually the one under attack...
    // may want to change the naming convention in the future
    // player issues an attack on the opposing player
    // check if all of opposing players ships are sunk
    // if so game is over, set activeplayer to null
    // otherwise switch active player
    let winner = this.#getWinner();
    if (winner === null) {
      console.log(
        `${this.players[playerIndex].playerType} is attacked at (${row}, ${column})`
      );
      this.players[playerIndex].gameboard.receiveAttack(row, column);
      winner = this.#getWinner();
    }
    return winner;
  }
}

export { Game };
