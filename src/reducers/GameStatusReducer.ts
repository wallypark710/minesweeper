import { createReducer } from '@reduxjs/toolkit';
import { GameStatusActions } from '@src/actions';

type InitialState = {
  inProgress: boolean;
};

const INITIAL_STATE: InitialState = {
  inProgress: false
};

const startGame = () => ({ inProgress: true });

const endGame = () => ({ inProgress: false });

const gameStatus = createReducer(INITIAL_STATE, {
  [GameStatusActions.START_GAME]: startGame,
  [GameStatusActions.END_GAME]: endGame
});

export default gameStatus;
