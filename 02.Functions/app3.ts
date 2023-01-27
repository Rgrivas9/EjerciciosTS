const numbers: number[] = [1, 2, 3, 5, 45, 37, 58];
const sumAll = (list: number[]): number => {
  let acc: number = 0;
  for (const n of list) {
    acc += n;
  }
  return acc;
};
