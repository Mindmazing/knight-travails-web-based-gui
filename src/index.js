import { knightMoves } from "./js/knightMoves.js";
import { DomGameBoard } from "./js/domGameBoard.js";
import "./css/style.css";

// create chess tiles
let gameBoard = new DomGameBoard();

let moves = knightMoves([0, 0], [7, 7]);
moves.shift();
moves.forEach((move) => gameBoard.highlightPosition(...move));
console.log(gameBoard.getKnightPosition());
console.log(gameBoard.getKingPosition());
