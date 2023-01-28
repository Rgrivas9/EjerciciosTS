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




/* const getVolume = (list:Sounds[]):number[]=>{
    const nList:number[]=[];
    for (const obj of list){for (const key in obj){nList.push(list[key].volume)}}
    return nList
}
console.log(getVolume) */
