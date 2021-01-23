import React from 'react';
import styled from 'styled-components';

import { MineBoard, MineCell } from '@src/components';
import { useController } from '@src/controller';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  width: 100%;

  .status-board {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    margin-bottom: 40px;

    .status-board__info {
      font-size: 20px;
      font-weight: 700;
      font-family: Helvetica;
    }

    .status-board__button {
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      background-color: red;
      border-radius: 10px;
    }
  }
`;

const GameStartButton = styled.button`
  padding: 20px;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  background-color: #11cf82;
  border-radius: 10px;
`;

const App: React.FC = () => {
  const controller = useController();

  return (
    <AppWrapper>
      {controller.gameStatus.inProgress ? (
        <>
          <div className="status-board">
            <h2 className="status-board__info">
              남은 지뢰 갯수 : {controller.mineCount}
            </h2>
            <button
              className="status-board__button"
              onClick={controller.initGame}
            >
              다시하기
            </button>
          </div>
          <MineBoard
            boardLength={controller.boardLength}
            mineCells={controller.mainBoard.map(
              (value: number, idx: number) => (
                <MineCell
                  key={idx}
                  value={value}
                  isOpen={controller.isOpen(idx)}
                  isMarked={controller.isMarked(idx)}
                  hasMine={controller.hasMine(idx)}
                  handleOpenCell={() => controller.clickCell(idx)}
                  handleMarkCell={() => controller.toggleMarkCell(idx)}
                />
              )
            )}
          />
        </>
      ) : (
        <GameStartButton onClick={controller.initGame}>
          게임 시작하기
        </GameStartButton>
      )}
    </AppWrapper>
  );
};

export default App;
