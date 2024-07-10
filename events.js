import { DOM, renderBoard } from './dom.js';
import { initialState, checkWinning } from './state.js';

export function attachEventListeners(state, SIZE) {
  DOM.$board.addEventListener('click', (event) => {
    if (state.gameEnded) {
      return;
    }
    if (!event.target.classList.contains('board-cell')) {
      return;
    }
    const $cell = event.target;
    const i = parseInt($cell.getAttribute('data-i'), 10);
    const j = parseInt($cell.getAttribute('data-j'), 10);
    if (state.boardModel[i][j] !== null) {
      alert('Cell has already been taken!');
      return;
    }
    const player = state.players[state.currentPlayer];
    state.boardModel[i][j] = player;
    const winningMove = checkWinning(state.boardModel, player);
    state.turn++;
    if (!winningMove) {
      state.currentPlayer = (state.currentPlayer + 1) % 2;
      renderBoard(state, SIZE);
      if (state.turn === SIZE * SIZE) {
        alert('It\'s a draw!');
      }
    } else {
      renderBoard(state, SIZE);
      state.gameEnded = true;
      alert(`Player ${player} wins!`);
    }
  });

  DOM.$resetButton.addEventListener('click', () => {
    if (confirm('Start a new game?')) {
      Object.assign(state, initialState());
      renderBoard(state, SIZE);
    }
  });
}
