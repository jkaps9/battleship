import { Ship } from "./ship.js";

class DisplayController {
  displayBoards(game) {
    const playerOneBoard = document.querySelector("#player-one-board");
    const playerTwoBoard = document.querySelector("#player-two-board");
    const p1board = game.playerOne.gameboard.grid;
    const p2board = game.playerTwo.gameboard.grid;

    for (let i = 0; i < p1board.length; i++) {
      for (let j = 0; j < p1board[i].length; j++) {
        const square = playerOneBoard.querySelector(
          `[data-row='${i}'][data-column='${j}']`
        );
        if (p1board[i][j] == 0) {
        } else if (p1board[i][j] instanceof Ship) {
          square.classList.add("ship");
        }
      }
    }

    for (let i = 0; i < p2board.length; i++) {
      for (let j = 0; j < p2board[i].length; j++) {
        const square = playerTwoBoard.querySelector(
          `[data-row='${i}'][data-column='${j}']`
        );
        if (p2board[i][j] == 0) {
        } else if (p2board[i][j] instanceof Ship) {
          square.classList.add("ship");
        }
      }
    }
  }
}

export { DisplayController };
