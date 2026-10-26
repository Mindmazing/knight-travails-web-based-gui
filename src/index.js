import { knightMoves } from "./js/knightMoves.js";
import "./css/style.css";

// create chess tiles
let domGameBoard = document.querySelector("#gameBoard");
let chessTile;
for (let i = 8; i > 0; i--) {
  for (let j = 0; j < 8; j++) {
    // create tile
    chessTile = document.createElement("div");
    chessTile.setAttribute("position", `${j} ${i}`);
    chessTile.classList.add("chess-tile");
    if (j % 2) {
      chessTile.classList.add(i % 2 ? "white" : "colored");
    } else {
      chessTile.classList.add(i % 2 ? "colored" : "white");
    }
    // append to game board
    domGameBoard.appendChild(chessTile);
  }
}

console.log(knightMoves([0, 0], [1, 1]));
