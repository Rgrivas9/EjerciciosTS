const swap: string[] = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const swapPositions = (
  list: string[],
  index1: number,
  index2: number
): string[] => {
  const toswap1: string = list[index1];
  const toswap2: string = list[index2];
  list[index1] = toswap2;
  list[index2] = toswap1;
  return list;
};
console.log(swapPositions(swap, 0, 1));
