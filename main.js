import { Game } from "./game.js";
import { DisplayController } from "./display-controller.js";

const game = new Game();
game.predeterminedGrid();
const displayController = new DisplayController();
displayController.displayBoards(game);
