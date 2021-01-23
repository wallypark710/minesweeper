import { createReducer } from '@reduxjs/toolkit';
import { BoardActions } from '@src/actions';

type InitialState = {
  mainBoard: number[][];
  minePosition: number[];
  openBoard: number[][];
  markBoard: number[][];
};

const INITIAL_STATE: InitialState = {
  mainBoard: [[]],
  minePosition: [],
  openBoard: [[]],
  markBoard: [[]]
};

// util

const calculateNearbyMines = (minePositions: number[], boardLength: number) => {
  const mineBoard: number[][] = Array.from(Array(boardLength), () =>
    Array(boardLength).fill(0)
  );

  minePositions.forEach((value: number) => {
    const targetRow = Math.floor(value / boardLength);
    const targetColumn = value % boardLength;

    for (let row = targetRow - 1; row <= targetRow + 1; row++) {
      if (row < 0 || row >= boardLength) continue;
      for (let col = targetColumn - 1; col <= targetColumn + 1; col++) {
        if (col < 0 || col >= boardLength) continue;

        mineBoard[row][col] += 1;
      }
    }
  });

  return mineBoard;
};

const mineInstallation = (
  totalMineCount: number,
  borderLength: number
): number[] => {
  const minePosition: number[] = [];

  while (minePosition.length < totalMineCount) {
    const newPosition = Math.floor(
      Math.random() * Math.floor(borderLength * borderLength)
    );
    if (minePosition.some((value: number) => value === newPosition)) {
      continue;
    }
    minePosition.push(newPosition);
  }
  minePosition.sort((a, b) => a - b);

  return minePosition;
};

// reducer

const initBoard = (
  _: InitialState,
  action: BoardActions.InitBoardActionType
) => {
  const { boardLength, totalMine } = action.payload;

  const minePosition = mineInstallation(totalMine, boardLength);
  const mainBoard = calculateNearbyMines(minePosition, boardLength);

  const openBoard = Array.from(Array(boardLength), () =>
    Array(boardLength).fill(0)
  );
  const markBoard = Array.from(Array(boardLength), () =>
    Array(boardLength).fill(0)
  );

  return { mainBoard, openBoard, markBoard, minePosition };
};

const openCell = (
  state = INITIAL_STATE,
  action: BoardActions.OpenCellActionType
) => {
  const openBoard = JSON.parse(JSON.stringify(state.openBoard));
  openBoard[action.payload.row][action.payload.col] = 1;

  return { ...state, openBoard };
};

const toggleMarkCell = (
  state = INITIAL_STATE,
  action: BoardActions.ToggleMarkCellActionType
) => {
  const markBoard = JSON.parse(JSON.stringify(state.markBoard));
  markBoard[action.payload.row][action.payload.col] = markBoard[
    action.payload.row
  ][action.payload.col]
    ? 0
    : 1;

  return { ...state, markBoard };
};

const board = createReducer(INITIAL_STATE, {
  [BoardActions.INIT_BOARD]: initBoard,
  [BoardActions.OPEN_CELL]: openCell,
  [BoardActions.TOGGLE_MARK_CELL]: toggleMarkCell
});

export default board;
