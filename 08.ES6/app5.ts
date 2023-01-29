
const ages: number[] = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const m18: number[] = ages.filter((num) => num > 18);
const pares: number[] = ages.filter((num) => num % 2 === 0);

interface Streamer {
  name: string;
  age: number;
  gameMorePlayed: string;
}

const streamers: Streamer[] = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const game: Streamer[] = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends"
);
const uName: Streamer[] = streamers.filter(
  (streamer) => streamer.name.includes("u") || streamer.name.includes("U")
);
const legend: Streamer[] = streamers
  .filter((streamer) => streamer.gameMorePlayed.includes("Legend"))
  .map((streamer) => ({
    name: streamer.name,
    age: streamer.age,
    gameMorePlayed:
      streamer.age > 35
        ? streamer.gameMorePlayed.toUpperCase()
        : streamer.gameMorePlayed,
  }));

const input = document.querySelector<HTMLInputElement>("[data-function=toFilterStreamers]")
input?.addEventListener('input',()=>{
    const filtered:Streamer[]=streamers.filter(
        (streamer) => (streamer.name.toLowerCase()).includes(input.value.toLowerCase())
      );
      console.log(filtered)
})