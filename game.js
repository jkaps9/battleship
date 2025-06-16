import { Player } from "./player.js";

const Game = function () {
  const playerOne = new Player("human");
  const playerTwo = new Player("computer");

  const predeterminedGrid = function () {
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
    ];

    for (let i = 0; i < coords.length; i++) {
      playerOne.gameboard.placeShip(
        coords[i].startRow,
        coords[i].startCol,
        coords[i].endRow,
        coords[i].endCol
      );
      playerTwo.gameboard.placeShip(
        coords[i].startRow,
        coords[i].startCol,
        coords[i].endRow,
        coords[i].endCol
      );
    }
  };
};

export { Game };
