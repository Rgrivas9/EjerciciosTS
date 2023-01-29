const numbers: number[] = [32, 21, 63, 95, 100, 67, 43];
const n100: number = numbers.find((number) => number === 100) as number;

interface Movies {
  title: string;
  stars: number;
  date: number;
}
const movies: Movies[] = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];
const y2010: Movies = movies.find((movie) => movie.date === 2010) as Movies;

interface Mutation {
  name: string;
  description: string;
}
interface Alien {
  name: string;
  planet: string;
  age: number;
  mutation?: Mutation;
}
const aliens: Alien[] = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];
const mutations: Mutation[] = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];
const alien: Alien = aliens.find(
  (alien) => alien.name === "Cucushumushu"
) as Alien;
const mutation: Mutation = mutations.find(
  (mutation) => mutation.name === "Porompompero"
) as Mutation;
const mutatedAlien: Alien = { ...alien, mutation: mutation };
console.log(mutatedAlien);
