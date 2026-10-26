export class DomGameBoard {
  constructor() {
    this.gameBoard = document.querySelector("#gameBoard");
    // create game board in dom
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
  }

  highlightPosition(x, y) {
    let selectedTile = document.querySelector(
      `.chess-tile[position="${x} ${y}"]`,
    );
    // highlight position
    let dot = document.createElement("div");
    dot.classList.add("highlight-dot");
    selectedTile.appendChild(dot);
  }
}
