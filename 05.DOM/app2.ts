/*
2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */

const div: HTMLDivElement = document.createElement("div");
const div2: HTMLDivElement = document.createElement("div");
const div3: HTMLDivElement = document.createElement("div");
const p: HTMLParagraphElement = document.createElement("p");
const h2 = document.querySelector<HTMLHeadingElement>(
  "h2.fn-insert-here"
) as HTMLHeadingElement;
const ul: HTMLUListElement = document.createElement("ul");
const pRemove =
  document.querySelectorAll<HTMLParagraphElement>(".fn-remove-me");
const p2: HTMLParagraphElement = document.createElement("p");
const firstdiv = document.querySelector<HTMLDivElement>("div");
const divInsert =
  document.querySelectorAll<HTMLDivElement>("div.fn-insert-here");

const apps: string[] = [
  "Facebook",
  "Netflix",
  "Instagram",
  "Snapchat",
  "Twitter",
];
let n: number = 0;

while (n < 6) {
  n++;
  div3.appendChild<HTMLParagraphElement>(document.createElement("p"));
}
for (const app of apps) {
  let li: HTMLLIElement = document.createElement("li");
  li.innerHTML = app;
  ul.appendChild(li);
}

div2.appendChild<HTMLParagraphElement>(document.createElement("p"));
p.innerHTML = "soy dinámico";
h2.innerHTML = "Wubba Lubba dub dub";
p2.innerHTML = "voy en medio";

pRemove.forEach((obj) => document.body.removeChild(obj));
divInsert.forEach((div) => {
  let pdentro: HTMLParagraphElement = document.createElement("p");
  pdentro.innerHTML = "voy dentro";
  div.appendChild(pdentro);
});

document.body.appendChild<HTMLDivElement>(div);
document.body.appendChild<HTMLDivElement>(div2);
document.body.appendChild<HTMLDivElement>(div3);
document.body.appendChild<HTMLParagraphElement>(p);
document.body.appendChild<HTMLUListElement>(ul);
firstdiv?.insertAdjacentElement("afterend", p2);
