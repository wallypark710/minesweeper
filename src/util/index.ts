export const BOARD_LENGTH = 8;
export const TOTAL_MINE = 10;

export const getCoordinate = (targetIdx: number, borderLength: number) => {
  const row = Math.floor(targetIdx / borderLength);
  const col = targetIdx % borderLength;

  return { row, col };
};
