interface Sound {
  format: string;
  volume: number;
}
interface Sounds {
  waves?: Sound;
  rain?: Sound;
  firecamp?: Sound;
  shower?: Sound;
  train?: Sound;
  wind?: Sound;
}
interface User {
  name: string;
  favoritesSounds: Sounds;
}
const users1: User[] = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const getFavourites = (list: User[]): string[] => {
  const favList: string[] = [];
  for (const obj of list) {
    for (const key in obj.favoritesSounds) {
      favList.push(key);
    }
  }
  favList.sort();
  return favList;
};
const howManyTimes = (list: string[]): string => {
  let str: string = "";
  let acc: number = 0;
  let index: number = 0;
  for (const cat of list) {
    index++;
    acc++;
    if (cat !== list[index]) {
      str += `${cat} se repite ${acc} veces, `;
      acc = 0;
    }
  }

  return str.substr(0, str.length - 2);
};
console.log(howManyTimes(getFavourites(users1)));
