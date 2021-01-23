export const getCoordinate = (targetIdx: number, borderLength: number) => {
  const row = Math.floor(targetIdx / borderLength);
  const col = targetIdx % borderLength;

  return { row, col };
};
