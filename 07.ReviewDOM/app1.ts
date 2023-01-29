interface Countries {
  title: string;
  imgUrl: string;
}
const countries1: string[] = [
  "Japón",
  "Nicaragua",
  "Suiza",
  "Australia",
  "Venezuela",
];
const cars: string[] = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const countries: Countries[] = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const pToRemove = document.querySelector<HTMLParagraphElement>(".fn-remove-me");
const divPrintHere = document.querySelector<HTMLDivElement>(
  "[data-function=printHere"
);

const ul1: HTMLUListElement = document.createElement("ul");
const ul2: HTMLUListElement = document.createElement("ul");
const div: HTMLDivElement = document.createElement("div");
const btn: HTMLButtonElement = document.createElement("button");
btn.innerHTML = "remove last";

countries1.forEach((country) => {
  let li: HTMLLIElement = document.createElement("li");
  li.innerHTML = country;
  ul1.appendChild(li);
});
cars.forEach((car) => {
  let li: HTMLLIElement = document.createElement("li");
  li.innerHTML = car;
  ul2.appendChild(li);
});
countries.forEach((country) => {
  let div1: HTMLDivElement = document.createElement("div");
  let h4: HTMLHeadingElement = document.createElement("h4");
  let img: HTMLImageElement = document.createElement("img");
  let btn1: HTMLButtonElement = document.createElement("button");
  img.setAttribute("src", country.imgUrl);
  img.setAttribute("alt", "image of a country");
  div.setAttribute("class", "remove");
  h4.innerHTML = country.title;
  btn1.innerHTML = "remove this";
  div1.appendChild(h4);
  div1.appendChild(img);
  div1.appendChild(btn1);
  div.appendChild(div1);
  btn1.addEventListener("click", (): void => div1.remove());
});

pToRemove?.remove();
document.body.appendChild(ul1);
divPrintHere?.appendChild(ul2);
document.body.appendChild(div);
div.insertAdjacentElement("afterend", btn);

btn.addEventListener("click", (): void => {
  let nodelist = document.querySelectorAll(".remove");
  if (nodelist.length != 0) {
    let last: HTMLDivElement = div.lastChild as HTMLDivElement;
    last?.remove();
  }
});
