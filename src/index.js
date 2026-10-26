import { knightMoves } from "./js/knightMoves.js";
import { DomGameBoard } from "./js/domGameBoard.js";
import "./css/style.css";

// create chess tiles
let gameBoard = new DomGameBoard();

gameBoard.highlightPosition(1, 1);
gameBoard.highlightPosition(2, 1);
gameBoard.highlightPosition(3, 1);
gameBoard.highlightPosition(4, 1);
