interface Alien {
  name: string;
  race: string;
  planet: string;
  weight: string;
}
const alien: Alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};
/* const printAlien=<T extends Alien>(obj: T):void=>{
    for (let key in obj) {
      console.log(key,'--->', obj[key])
    }
  }
printAlien(alien) */

const printAlien=(obj:Alien):void=>{
  let key: keyof typeof obj
  for (key in obj){console.log(key,'--->',obj[key])}
}
printAlien(alien)