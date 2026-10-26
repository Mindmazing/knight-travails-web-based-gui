import whiteKnightImg from "../assets/images/wn.png";
import blackKingImg from "../assets/images/bk.png";

export class DomGameBoard {
  constructor() {
    this.gameBoard = document.querySelector("#gameBoard");

    // create knight piece
    this.knight = document.createElement("img");
    this.knight.src = whiteKnightImg;
    this.knight.classList.add("chess-piece");
    this.knight.id = "knight";

    //create king piece
    this.king = document.createElement("img");
    this.king.src = blackKingImg;
    this.king.classList.add("chess-piece");
    this.king.id = "king";

    //get inputs
    this.xCoorInput = document.querySelector("input[name='x-coor']");
    this.yCoorInput = document.querySelector("input[name='y-coor']");
    this.findPathBtn = document.querySelector(".inputs > button");

    // Display game board in site
    this.#createDomGameBoard();
  }

  #createDomGameBoard() {
    let chessTile;
    for (let i = 7; i >= 0; i--) {
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
        this.gameBoard.appendChild(chessTile);
      }
    }
    // place knight and king
    this.gameBoard
      .querySelector(".chess-tile[position='0 0']")
      .appendChild(this.knight);
    this.gameBoard
      .querySelector(".chess-tile[position='7 7']")
      .appendChild(this.king);
  }

  highlightPosition(x, y) {
    let selectedTile = this.getTile(x, y);
    // highlight position
    let dot = document.createElement("div");
    dot.classList.add("highlight-dot");
    selectedTile.appendChild(dot);
  }

  getKnightPosition() {
    let chessTile = this.gameBoard.querySelector("#knight").parentNode;
    let position = chessTile.getAttribute("position").split(" ");
    return position.map(Number);
  }

  getKingPosition() {
    let chessTile = this.gameBoard.querySelector("#king").parentNode;
    let position = chessTile.getAttribute("position").split(" ");
    return position.map(Number);
  }

  getTile(x, y) {
    return document.querySelector(`.chess-tile[position="${x} ${y}"]`);
  }

  moveKnight(x, y) {
    // remove knight from current position
    let knightPosition = this.getKnightPosition();
    this.getTile(...knightPosition).removeChild(this.knight);
    // place knight in new position
    this.getTile(x, y).appendChild(this.knight);
  }

  getInputCoors() {
    let xCoor = +this.xCoorInput.value - 1;
    let yCoor = +this.yCoorInput.value - 1;

    if (xCoor <= 7 && xCoor >= 0 && yCoor <= 7 && yCoor >= 0)
      return [xCoor, yCoor];

    return [0, 0];
  }

  cleanBoard() {
    // select all tiles
    const dots = document.querySelectorAll(".chess-tile>.highlight-dot");
    dots.forEach((tile) => {
      tile.remove();
    });
  }
}
