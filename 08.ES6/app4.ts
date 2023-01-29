/* 
4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
]; */
interface User {
  id: number;
  name: string;
}
const users: User[] = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const nArray: string[] = users.map((user) => user.name);

const anacArray: string[] = users.map((user) =>
  user.name[0] === "A" ? "Anacleto" : user.name
);
console.log(anacArray);

interface Cities {
  isVisited: boolean;
  name: string;
}
const cities: Cities[] = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
const visitedArray: string[] = cities.map((city) =>
  city.isVisited === true ? (city.name += " (Visitado)") : city.name
);
