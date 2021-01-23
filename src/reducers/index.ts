import { combineReducers } from '@reduxjs/toolkit';
import mineDetect from './MineDetectReducer';
import board from './BoardReducer';
import gameStatus from './GameStatusReducer';

export const rootReducer = combineReducers({
  mineDetect,
  board,
  gameStatus
});

export type RootState = ReturnType<typeof rootReducer>;
