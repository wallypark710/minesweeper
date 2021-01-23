import { createAction } from '@reduxjs/toolkit';

type CoordinateType = {
  row: number;
  col: number;
};

type InitBoardPayload = {
  boardLength: number;
  totalMine: number;
};

// Action
export const INIT_BOARD = 'INIT_BOARD';
export const OPEN_CELL = 'OPEN_CELL';
export const TOGGLE_MARK_CELL = 'TOGGLE_MARK_CELL';

// Action type

export type InitBoardActionType = {
  type: typeof INIT_BOARD;
  payload: InitBoardPayload;
};

export type OpenCellActionType = {
  type: typeof OPEN_CELL;
  payload: CoordinateType;
};

export type ToggleMarkCellActionType = {
  type: typeof TOGGLE_MARK_CELL;
  payload: CoordinateType;
};

// Action instance
export const initBoard = (payload: InitBoardPayload) => {
  return createAction<InitBoardPayload>(INIT_BOARD)(payload);
};

export const openCell = (payload: CoordinateType) => {
  return createAction<CoordinateType>(OPEN_CELL)(payload);
};

export const toggleMarkCell = (payload: CoordinateType) => {
  return createAction<CoordinateType>(TOGGLE_MARK_CELL)(payload);
};
