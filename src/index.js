import { knightMoves } from "./js/knightMoves.js";
import { DomGameBoard } from "./js/domGameBoard.js";
import "./css/style.css";

// create chess tiles
let gameBoard = new DomGameBoard();

gameBoard.moveKnight(0, 0);

gameBoard.findPathBtn.addEventListener("click", () => {
  // clean board from dots
  gameBoard.cleanBoard();

  // get inputs and move knight to inputs
  gameBoard.moveKnight(...gameBoard.getInputCoors());

  let start = gameBoard.getKnightPosition();
  let end = gameBoard.getKingPosition();

  // calculate moves
  let moves = knightMoves(start, end);

  // highlight moves in board
  moves.forEach((move) => {
    gameBoard.highlightPosition(...move);
  });

  let knightMovementInterval = setInterval(() => {
    gameBoard.moveKnight(...moves.shift());

    if (!moves.length) {
      clearInterval(knightMovementInterval);
    }
  }, 500);
});
