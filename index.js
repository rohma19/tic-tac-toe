import { initialState } from './state.js';
import { renderBoard } from './dom.js';
import { attachEventListeners } from './events.js';

document.addEventListener('DOMContentLoaded', () => {
  const SIZE = 3;
  let state = initialState();
  renderBoard(state, SIZE);
  attachEventListeners(state, SIZE);
});
