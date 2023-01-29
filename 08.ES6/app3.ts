/* 
3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; */

const pointsList: number[] = [32, 54, 21, 64, 75, 43];
const pointsListcopy: number[] = [...pointsList];

interface Toy {
  name: string;
  date: string;
  color: string;
}
const toy: Toy = {
  name: "Bus laiyiar",
  date: "20-30-1995",
  color: "multicolor",
};
const toyCopy: Toy = { ...toy };

const pointsList1: number[] = [32, 54, 21, 64, 75, 43];
const pointsList2: number[] = [54, 87, 99, 65, 32];
const pointsList12: number[] = [...pointsList1, ...pointsList2];

interface Toy2 {
  lights: string;
  power: string[];
}
interface ToyUpdated extends Toy, Toy2 {}
const toyUpdate: Toy2 = {
  lights: "rgb",
  power: ["Volar like a dragon", "MoonWalk"],
};
const newToy: ToyUpdated = { ...toy, ...toyUpdate };
console.log(newToy);

const colors: string[] = ["rojo", "azul", "amarillo", "verde", "naranja"];
const colors2: string[] = [colors[0], ...colors.slice(2)];
