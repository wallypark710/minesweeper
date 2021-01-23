import { createAction } from '@reduxjs/toolkit';

// Action
export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';

// Action instance
export const startGame = createAction(START_GAME);
export const endGame = createAction(END_GAME);
