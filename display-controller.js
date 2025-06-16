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
    const p1board = this.game.playerOne.gameboard.grid;
    const p2board = this.game.playerTwo.gameboard.grid;

    for (let i = 0; i < p1board.length; i++) {
      for (let j = 0; j < p1board[i].length; j++) {
        const square = this.playerOneBoard.querySelector(
          `[data-row='${i}'][data-column='${j}']`
        );
        square.className = "";
        if (p1board[i][j] == 0) {
        } else if (p1board[i][j] instanceof Ship) {
          square.classList.add("ship");
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
        if (p2board[i][j] === 0) {
        } else if (p2board[i][j] instanceof Ship) {
          square.classList.add("ship");
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

    this.playerOneBoard.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        let row = btn.getAttribute("data-row");
        let column = btn.getAttribute("data-column");
        this.game.playerOne.gameboard.receiveAttack(row, column);
        this.#displayBoards();
      });
    });

    this.playerTwoBoard.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        let row = btn.getAttribute("data-row");
        let column = btn.getAttribute("data-column");
        this.game.playerTwo.gameboard.receiveAttack(row, column);
        this.#displayBoards();
      });
    });
  }
}

export { DisplayController };
