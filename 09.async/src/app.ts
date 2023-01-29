/*El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.
*/

export interface Country {
  country: Countries[];
  name: string;
}
export interface Countries {
  country_id: string;
  probability: number;
}
const baseUrl: string = "https://api.nationalize.io/?name=";
const input: HTMLInputElement = document.createElement("input");
const btn: HTMLButtonElement = document.createElement("button");
btn.innerHTML = "Buscar";
document.body.appendChild(input);
document.body.appendChild(btn);

const getObj = async (name: string): Promise<Country> => {
  const data: Response = await fetch(`${baseUrl}${name}`);
  const json: Promise<Country> = await data.json();
  return json;
};
const createStr = (obj: Countries[]): string => {
  let str: string = "";
  let index: number = -1;
  for (const country of obj) {
    index++;
    index === obj.length - 1
      ? (str += `y un ${(country.probability * 1000) / 10}% de ser de ${
          country.country_id
        }`)
      : (str += `, un ${(country.probability * 1000) / 10}% de ser de ${
          country.country_id
        }`);
  }

  return str.slice(1);
};
const printObj = (obj: Country): void => {
  const h4: HTMLHeadingElement = document.createElement("h4");
  const p: HTMLParagraphElement = document.createElement("p");
  const div: HTMLDivElement = document.createElement("div");
  const btn: HTMLButtonElement = document.createElement("button");
  h4.innerHTML = obj.name;
  p.innerHTML = `El nombre ${obj.name} tiene${createStr(obj.country)}`;
  div.appendChild(h4);
  div.appendChild(p);
  div.appendChild(btn);
  document.body.appendChild(div);
  btn.addEventListener("click", () => {
    div.remove();
  });
};

btn.addEventListener("click", async () => {
  if (input.value != "") {
    const obj: Country = await getObj(input.value);
    printObj(obj);
  } else {
    alert("Introduce un nombre y dale a buscar.");
  }
});
