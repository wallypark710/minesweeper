import React from 'react';
import styled from 'styled-components';

type MineCellProps = {
  hasMine: boolean;
  value: number;
  isOpen: boolean;
  isMarked: boolean;
  handleOpenCell: () => void;
  handleMarkCell: () => void;
};

const MineCellWrapper = styled.div`
  border: 1px solid #333;
  cursor: pointer;
  position: relative;
`;

const Block = styled.div<{ isOpen: boolean }>`
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #11cf82;
`;

const Cell = styled.div<{ hasMine: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: ${({ hasMine }) => (hasMine ? 'red' : 'white')};
`;

const Mark = styled.div<{ isMarked: boolean }>`
  opacity: ${({ isMarked }) => (isMarked ? 1 : 0)};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 10;
`;

const MineCell: React.FC<MineCellProps> = props => {
  return (
    <MineCellWrapper
      onClick={props.handleOpenCell}
      onContextMenu={e => {
        e.preventDefault();
        props.handleMarkCell();
      }}
    >
      <Mark isMarked={props.isMarked} />
      <Block isOpen={props.isOpen} />
      <Cell hasMine={props.hasMine}>
        {props.hasMine ? '*' : props.value || ''}
      </Cell>
    </MineCellWrapper>
  );
};

export default MineCell;
