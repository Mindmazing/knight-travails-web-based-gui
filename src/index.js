import { knightMoves } from "./js/knightMoves.js";
import { DomGameBoard } from "./js/domGameBoard.js";
import "./css/style.css";

// create chess tiles
let gameBoard = new DomGameBoard();

let start = gameBoard.getKnightPosition();
let end = gameBoard.getKingPosition();

let moves = knightMoves(start, end);

moves.forEach((move) => gameBoard.highlightPosition(...move));
