interface Toy1 {
  id: number;
  name: string;
  sellCount: number;
}
const popularToys: Toy1[] = [];
const toys1: Toy1[] = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];
for (const toy of toys1) {
  toy.sellCount > 15 ? popularToys.push(toy) : false;
}
console.log(popularToys);
