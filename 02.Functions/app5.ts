const mixedElements: (number | string)[] = [
  6,
  1,
  "Rayo",
  1,
  "vallecano",
  "10",
  "upgrade",
  8,
  "hub",
];
const mixedSum = (list: (number | string)[]): number => {
  let acc: number = 0;
  for (const obj of list) {
    typeof obj == "string" ? (acc += obj.length) : (acc += obj);
  }
  return acc;
};
