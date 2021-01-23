import { createAction } from '@reduxjs/toolkit';

type InitMinePayload = {
  totalMine: number;
};

// Action
export const INIT_MINE = 'INIT_MINE';
export const ADD_MINE = 'ADD_MINE';
export const REMOVE_MINE = 'REMOVE_MINE';

// Action type

export type InitMineActionType = {
  type: typeof INIT_MINE;
  payload: InitMinePayload;
};

// Action instance
export const initMine = (payload: InitMinePayload) =>
  createAction<InitMinePayload>(INIT_MINE)(payload);

export const addMine = createAction(ADD_MINE)();

export const removeMine = createAction(REMOVE_MINE)();
