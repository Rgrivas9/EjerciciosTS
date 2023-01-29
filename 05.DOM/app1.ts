const btn = document.querySelector<HTMLButtonElement>(".showme");
const h1 = document.querySelector<HTMLHeadingElement>("#pillado");
const p = document.querySelectorAll<HTMLParagraphElement>("p");
const pokemon = document.querySelectorAll<HTMLHeadingElement>(".pokemon");
const testMe = document.querySelectorAll<HTMLSpanElement>("[data-function=testMe]");
const testMe3 = document.querySelectorAll<HTMLSpanElement>("[data-function=testMe]")[2];

console.log(btn)
console.log(h1)
console.log(p)
console.log(pokemon)
console.log(testMe)
console.log(testMe3)