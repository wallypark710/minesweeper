import React from 'react';
import styled from 'styled-components';

type MineBoardProps = {
  mineCells: React.ReactNode[];
};

const MineBoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 60px);
  grid-template-rows: repeat(8, 60px);
  gap: 2px;
`;

const MineBoard: React.FC<MineBoardProps> = props => {
  return <MineBoardWrapper>{props.mineCells}</MineBoardWrapper>;
};

export default MineBoard;
