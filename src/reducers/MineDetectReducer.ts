import { createReducer } from '@reduxjs/toolkit';
import { MineDetectActions } from '@src/actions';

type InitialState = {
  count: number;
};

const INITIAL_STATE: InitialState = {
  count: 0
};

const initMine = (
  _: InitialState,
  action: MineDetectActions.InitMineActionType
) => {
  return { count: action.payload.totalMine };
};

const addMine = (state = INITIAL_STATE) => {
  return { count: state.count + 1 };
};

const removeMine = (state = INITIAL_STATE) => {
  return { count: state.count - 1 };
};

const mineDetect = createReducer(INITIAL_STATE, {
  [MineDetectActions.INIT_MINE]: initMine,
  [MineDetectActions.ADD_MINE]: addMine,
  [MineDetectActions.REMOVE_MINE]: removeMine
});

export default mineDetect;
