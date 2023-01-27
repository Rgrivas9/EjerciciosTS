const numbers1: number[] = [12, 21, 38, 5, 45, 37, 6];
const average = (list: number[]): number => {
  let acc: number = 0;
  for (const num of numbers1) {
    acc += num;
  }
  return acc / numbers1.length;
};
