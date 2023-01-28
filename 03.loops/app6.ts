interface Toy {
  id: number;
  name: string;
}
const toys: Toy[] = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

const removeByWord = (word: string, list: Toy[]): Toy[] => {
  const newList: Toy[] = [];
  for (const toy of list) {
    toy.name.toLowerCase().includes(word.toLowerCase())
      ? console.log(`${toy.name} removed`)
      : newList.push(toy);
  }
  return newList;
};
console.log(removeByWord("gAto", toys));
