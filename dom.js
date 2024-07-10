export const DOM = {
  $currentPlayer: document.querySelector('.js-current-player'),
  $board: document.querySelector('.js-board'),
  $resetButton: document.querySelector('.js-reset'),
};

export function renderBoard(state, SIZE) {
  DOM.$currentPlayer.textContent = state.players[state.currentPlayer];
  DOM.$board.innerHTML = '';
  for (let i = 0; i < SIZE; i++) {
    const $row = document.createElement('div');
    $row.classList.add('board-row');
    for (let j = 0; j < SIZE; j++) {
      const $cell = document.createElement('div');
      $cell.classList.add('board-cell');
      $cell.setAttribute('data-i', i);
      $cell.setAttribute('data-j', j);
      const $content  = document.createElement('span');
      $content.classList.add('content');
      $content.textContent = state.boardModel[i][j];
      $cell.appendChild($content);
      $row.appendChild($cell);
    }
    DOM.$board.appendChild($row);
  }
}
