import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BoardActions,
  GameStatusActions,
  MineDetectActions
} from '@src/actions';

import { getCoordinate } from '@src/util';

const TOTAL_MINE = 10;
const BOARD_LENGTH = 8;

export const useController = () => {
  const mineCount = useSelector((state: any) => state.mineDetect);
  const board = useSelector((state: any) => state.board);
  const gameStatus = useSelector((state: any) => state.gameStatus);
  const dispatch = useDispatch();
  const [clickedPosition, setClickedPosition] = useState<number | undefined>();

  useEffect(() => {
    if (clickedPosition && hasMine(clickedPosition)) {
      window.alert('🔥🔥🔥🔥지뢰가 펑🔥🔥🔥🔥');
      dispatch(GameStatusActions.endGame());
    }
  }, [clickedPosition]);

  useEffect(() => {
    if (gameStatus.inProgress) {
      const closeCellCount = JSON.stringify(board.openBoard).match(/[0]/g)
        ?.length;
      const markCellCount = JSON.stringify(board.markBoard).match(/[1]/g)
        ?.length;

      if (closeCellCount === markCellCount) {
        window.alert('🎉🎉🎉🎉 승리 🎉🎉🎉🎉');
        dispatch(GameStatusActions.endGame());
      }
    }
  }, [board.openBoard, board.markBoard]);

  const initGame = () => {
    dispatch(MineDetectActions.initMine({ totalMine: TOTAL_MINE }));
    dispatch(GameStatusActions.startGame());
    dispatch(
      BoardActions.initBoard({
        boardLength: BOARD_LENGTH,
        totalMine: TOTAL_MINE
      })
    );
  };

  const clickCell = (targetIdx: number) => {
    if (isMarked(targetIdx)) {
      return;
    }
    const { row, col } = getCoordinate(targetIdx, BOARD_LENGTH);

    setClickedPosition(targetIdx);
    dispatch(BoardActions.openCell({ row, col }));
  };

  const toggleMarkCell = (targetIdx: number) => {
    if (isOpen(targetIdx)) {
      return;
    }

    if (!isMarked(targetIdx) && mineCount.count === 0) {
      return;
    }

    const { row, col } = getCoordinate(targetIdx, BOARD_LENGTH);
    setClickedPosition(undefined);

    isMarked(targetIdx)
      ? dispatch(MineDetectActions.addMine)
      : dispatch(MineDetectActions.removeMine);

    dispatch(BoardActions.toggleMarkCell({ row, col }));
  };

  const hasMine = (targetIdx: number): boolean => {
    return board.minePosition.some((value: number) => value === targetIdx);
  };

  const isOpen = (targetIdx: number) => {
    const { row, col } = getCoordinate(targetIdx, BOARD_LENGTH);
    return board.openBoard[row][col];
  };

  const isMarked = (targetIdx: number) => {
    const { row, col } = getCoordinate(targetIdx, BOARD_LENGTH);
    return board.markBoard[row][col];
  };

  return {
    gameStatus,
    initGame,
    mainBoard: board.mainBoard.flat(),
    isOpen,
    isMarked,
    hasMine,
    mineCount: mineCount.count,
    clickCell,
    toggleMarkCell
  };
};
