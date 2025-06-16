import { Ship } from "./ship.js";
import { Game } from "./game.js";

class DisplayController {
  playerOneBoard = document.querySelector("#player-one-board");
  playerTwoBoard = document.querySelector("#player-two-board");
  newGameButton = document.querySelector("#new-game");

  constructor() {
    this.game = new Game();
    this.#displayBoards();
    this.#addEventListeners();
  }

  #displayBoards() {
    const boards = this.game.getBoards();
    const p1board = boards[0];
    const p2board = boards[1];

    for (let i = 0; i < p1board.length; i++) {
      for (let j = 0; j < p1board[i].length; j++) {
        const square = this.playerOneBoard.querySelector(
          `[data-row='${i}'][data-column='${j}']`
        );
        square.className = "";
        if (p1board[i][j] == 0) {
        } else if (p1board[i][j] instanceof Ship) {
          if (p1board[i][j].size === 5) square.classList.add("ship-5");
          if (p1board[i][j].size === 4) square.classList.add("ship-4");
          if (p1board[i][j].size === 3) square.classList.add("ship-3");
          if (p1board[i][j].size === 2) square.classList.add("ship-2");
        } else if (p1board[i][j] === "m") {
          square.classList.add("miss");
        } else if (p1board[i][j] === "x") {
          square.classList.add("hit");
        }
      }
    }

    for (let i = 0; i < p2board.length; i++) {
      for (let j = 0; j < p2board[i].length; j++) {
        const square = this.playerTwoBoard.querySelector(
          `[data-row='${i}'][data-column='${j}']`
        );
        square.className = "";
        if (p2board[i][j] === 0) {
        } else if (p2board[i][j] instanceof Ship) {
          // player 2 is the computer,
          // don't want to show their ships to the player
          //   square.classList.add("ship");
        } else if (p2board[i][j] === "m") {
          square.classList.add("miss");
        } else if (p2board[i][j] === "x") {
          square.classList.add("hit");
        }
      }
    }
  }

  #addEventListeners() {
    this.newGameButton.addEventListener("click", () => {
      this.game = new Game();
      this.#displayBoards();
    });

    this.playerTwoBoard.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        let row = btn.getAttribute("data-row");
        let column = btn.getAttribute("data-column");
        let winner = this.game.playRound(row, column, 1);
        this.#displayBoards();
        if (winner !== null) {
          console.log(`${winner.playerType} wins!`);
        } else {
          this.game.computerTurn();
          this.#displayBoards();
        }
      });
    });
  }

  #removeEventListeners() {}
}

export { DisplayController };
