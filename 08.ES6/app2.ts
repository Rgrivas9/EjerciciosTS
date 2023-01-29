/* 
2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] } */
interface Game {
  title: string;
  gender: string[];
  year: number;
}
const game: Game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};
const { title, gender, year } = game;
console.log(title, gender, year);

const fruits: string[] = ["Banana", "Strawberry", "Orange"];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

interface Tiger {
  name1: string;
  race: string;
}
const animalFunction = (): Tiger => {
  return { name1: "Bengal Tiger", race: "Tiger" };
};
const { name1, race } = animalFunction();
console.log(name1, race);

interface Car {
  name2: string;
  itv: number[];
}
const car: Car = { name2: "Mazda 6", itv: [2015, 2011, 2020] };
const { name2, itv } = car;
const [itv1, itv2, itv3] = itv;
console.log(name2, itv, itv1, itv2, itv3);
