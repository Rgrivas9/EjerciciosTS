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

const users: User[] = [
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

const getVolume = (list: User[]): number[] => {
  const nList: number[] = [];
  for (const user of list) {
    let key: keyof typeof user.favoritesSounds;
    let favUser: Sounds = user.favoritesSounds;
    for (key in user.favoritesSounds) {
      let vol: Sound = favUser[key] as Sound;
      nList.push(vol.volume);
    }
  }
  return nList;
};
const averageVol = (list: number[]): number => {
  let acc: number = 0;
  for (const n of list) {
    acc += n;
  }
  return acc / list.length;
};
console.log(averageVol(getVolume(users)));
