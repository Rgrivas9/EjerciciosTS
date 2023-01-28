interface Movie {
  title: string;
  duration: number;
  categories: string[];
}

const movies: Movie[] = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
const getCateg = (list: Movie[]): string[] => {
  const catList: string[] = [];
  const dList: string[] = [];
  let index: number = 0;
  for (const movie of list) {
    for (const cat of movie.categories) {
      dList.push(cat);
    }
  }
  dList.sort();
  for (const cat of dList) {
    index++;
    if (cat !== dList[index]) {
      catList.push(cat);
    }
  }
  return catList;
};
console.log(getCateg(movies));
