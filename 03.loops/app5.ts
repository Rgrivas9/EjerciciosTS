interface Place {
  id: number;
  name: string;
}

const placesToTravel: Place[] = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const removeID = (id: number[], list: Place[]): Place[] => {
  const newList: Place[] = [];
  for (const place of list) {
    id.includes(place.id)
      ? console.log(`${place.name} removed`)
      : newList.push(place);
  }
  return newList;
};
console.log(removeID([11, 40], placesToTravel));
