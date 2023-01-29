/*
5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
</body>
</html>

5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i',
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
  <button data-function="toShowFilterStreamers">Filter</button>
</body>
</html> */
var ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
var m18 = ages.filter(function (num) { return num > 18; });
var pares = ages.filter(function (num) { return num % 2 === 0; });
var streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
var game = streamers.filter(function (streamer) { return streamer.gameMorePlayed === "League of Legends"; });
var uName = streamers.filter(function (streamer) { return streamer.name.includes("u") || streamer.name.includes("U"); });
var legend = streamers
    .filter(function (streamer) { return streamer.gameMorePlayed.includes("Legend"); })
    .map(function (streamer) { return ({
    name: streamer.name,
    age: streamer.age,
    gameMorePlayed: streamer.age > 35
        ? streamer.gameMorePlayed.toUpperCase()
        : streamer.gameMorePlayed
}); });
var input = document.querySelector("[data-function=toFilterStreamers]");
input === null || input === void 0 ? void 0 : input.addEventListener('input', function () {
    var filtered = streamers.filter(function (streamer) { return (streamer.name.toLowerCase()).includes(input.value.toLowerCase()); });
    console.log(filtered);
});
