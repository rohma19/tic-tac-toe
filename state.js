const SIZE = 3;

export function initialState() {
  return {
    boardModel: Array(SIZE).fill(null).map(_ => Array(SIZE).fill(null)),
    players: ['X', 'O'],
    currentPlayer: 0,
    gameEnded: false,
    turn: 0,
  };
}

export function checkWinning(board, player) {
  // Check horizontal.
  for (let i = 0; i < SIZE; i++) {
    if (board[i].every(cell => cell === player)) {
      return true;
    }
  }

  // Check vertical.
  for (let j = 0; j < SIZE; j++) {
    let verticalAllPlayer = true;
    for (let i = 0; i < SIZE; i++) {
      if (board[i][j] !== player) {
        verticalAllPlayer = false;
        break;
      }
    }
    if (verticalAllPlayer) {
      return verticalAllPlayer;
    }
  }

  // Check diagonal South-East.
  let diagonalAllPlayer = true;
  for (let i = 0; i < SIZE; i++) {
    if (board[i][i] !== player) {
      diagonalAllPlayer = false;
      break;
    }
  }
  if (diagonalAllPlayer) {
    return diagonalAllPlayer;
  }

  // Check diagonal North-East.
  diagonalAllPlayer = true;
  for (let i = SIZE - 1, j = 0; i >= 0; i--, j++) {
    if (board[i][j] !== player) {
      diagonalAllPlayer = false;
      break;
    }
  }
  if (diagonalAllPlayer) {
    return diagonalAllPlayer;
  }

  return false;
}
