export const getMatrixPosition = (i, d) => {
  const row = Math.floor(i / d);
  const column = i % d;
  return [row, column];
};

export const createMatrix = (d) => {
  return Array(d)
    .fill(null)
    .map(() => Array(d).fill(null));
};
