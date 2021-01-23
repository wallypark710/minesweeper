import React from 'react';
import styled from 'styled-components';

type MineBoardProps = {
  mineCells: React.ReactNode[];
  boardLength: number;
};

const MineBoardWrapper = styled.div<{ boardLength: number }>`
  display: grid;
  grid-template-columns: repeat(${({ boardLength }) => boardLength}, 60px);
  grid-template-rows: repeat(${({ boardLength }) => boardLength}, 60px);
  gap: 2px;
`;

const MineBoard: React.FC<MineBoardProps> = props => {
  return (
    <MineBoardWrapper boardLength={props.boardLength}>
      {props.mineCells}
    </MineBoardWrapper>
  );
};

export default MineBoard;
