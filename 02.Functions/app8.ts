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
  "code",
];

const counter = (list: string[]): string => {
  list.sort();
  const newList: string[] = [];
  let acc: number = 0;
  for (const word of list) {
    newList.push(word.toLowerCase());
  }
  let index: number = 0;
  let acc1: number = 0;
  let str: string = "";
  for (const word of newList) {
    index++;
    acc++;
    if (word != newList[index] && newList[index] != undefined) {
      str += ` ${word} se repite ${acc} veces,`; //Se podría formatear mejor
      acc = 0;
    }
  }
  return str.substr(0, str.length - 1);
};
