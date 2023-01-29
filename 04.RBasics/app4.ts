const array: string[] = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

const findIndexOf = (list: string[], word1 = ""): number | boolean => {
  const lList: string[] = [];
  for (const word of list) {
    lList.push(word.toLowerCase());
  }
  let result: number | boolean = false;
  for (const word of lList) {
    if (word === word1.toLowerCase()) {
      result = lList.indexOf(word);
    }
  }
  return result;
};
console.log(findIndexOf(array));
