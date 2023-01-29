/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
data-function="testMe".

 */
var btn = document.querySelector(".showme");
var h1 = document.querySelector("#pillado");
var p = document.querySelectorAll("p");
var pokemon = document.querySelectorAll(".pokemon");
var testMe = document.querySelectorAll("[data-function=testMe]");
var testMe3 = document.querySelectorAll("[data-function=testMe]")[2];
console.log(btn);
console.log(h1);
console.log(p);
console.log(pokemon);
console.log(testMe);
console.log(testMe3);
