const knightMovements = [
  [2, -1],
  [2, 1],
  [1, -2],
  [1, 2],
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
];

class Move {
  constructor(currentMove = [], previousMove = null) {
    this.currentPosition = currentMove;
    this.previousPosition = previousMove;
  }
}

function knightMovementsToTargetList(start, end) {
  const movesQueue = [new Move(start)];

  while (movesQueue) {
    let currentQueueMove = movesQueue.shift();

    // queue all valid moves from current queue move
    for (let knightMove of knightMovements) {
      let newMove = [
        knightMove[0] + currentQueueMove.currentPosition[0],
        knightMove[1] + currentQueueMove.currentPosition[1],
      ];

      if (newMove.join("") === end.join("")) {
        return new Move(newMove, currentQueueMove);
      }

      // validate move
      if (
        newMove[0] >= 0 &&
        newMove[0] <= 7 &&
        newMove[1] >= 0 &&
        newMove[1] <= 7
      ) {
        // queue move
        movesQueue.push(new Move(newMove, currentQueueMove));
      }
    }
  }
}

export function knightMoves(start, end) {
  // return start if both start and end are equal
  if (start.join("") === end.join("")) {
    return [start];
  }

  // calculate moves and get a sort of linked list
  let movesList = knightMovementsToTargetList(start, end);

  // format moves to an array
  let currentMove = movesList;
  let moves = [];
  while (currentMove != null) {
    moves.unshift(currentMove.currentPosition);
    currentMove = currentMove.previousPosition;
  }

  return moves;
}
