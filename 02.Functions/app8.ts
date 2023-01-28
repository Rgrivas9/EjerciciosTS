const counterWords: string[] = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "Upgrade",
  "upgrade",
  "code",
  "zou",
];

const counter = (list: string[]): string => {
  const newList: string[] = [];
  let acc: number = 0;
  for (const word of list) {
    newList.push(word.toLowerCase());
  }
  newList.sort();
  console.log(newList);
  let index: number = 0;
  let acc1: number = 0;
  let str: string = "";
  for (const word of newList) {
    index++;
    acc++;

    if (word != newList[index] && newList[index] != undefined) {
      acc != 1
        ? (str += ` ${word} se repite ${acc} veces,`)
        : (str += ` ${word} se repite ${acc} vez,`);
      acc = 0;
    }
  }
  const acc2: number =
    newList.length - newList.indexOf(newList[newList.length - 1]);
  acc2 != 1
    ? (str += ` y ${newList[newList.length - 1]} se repite ${acc2} veces,`)
    : (str += ` y ${newList[newList.length - 1]} se repite ${acc2} vez.`);
  return str;
};
console.log(counter(counterWords));
