const products: string[] = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

const showIncludes = (list: string[], word: string): string[] => {
  const newList: string[] = [];
  const anotherList: string[] = [];

  for (const w of list) {
    anotherList.push(w.toLowerCase());
  }
  for (const w of anotherList) {
    if (w.includes(word.toLowerCase())) {
      newList.push(w);
    }
  }
  return newList;
};
console.log(showIncludes(products, "camiseta"));
