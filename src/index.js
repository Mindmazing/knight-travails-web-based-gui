import { knightMoves } from "./js/knightMoves.js";
import { DomGameBoard } from "./js/domGameBoard.js";
import "./css/style.css";

// create chess tiles
let gameBoard = new DomGameBoard();

gameBoard.moveKnight(1, 0);

// get starting position
let start = gameBoard.getKnightPosition();
let end = gameBoard.getKingPosition();

// calculate moves
let moves = knightMoves(start, end);
moves.shift();

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
