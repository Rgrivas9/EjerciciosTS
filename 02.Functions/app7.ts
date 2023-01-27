const nameFinder: string[] = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
const finder = (name: string, list: string[]): (boolean | number)[] => {
  const newList: string[] = [];
  for (const obj of list) {
    newList.push(obj.toLowerCase());
  }
  return newList.includes(name.toLowerCase())
    ? [true, newList.indexOf(name.toLowerCase())]
    : [false];
};
