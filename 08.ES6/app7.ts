interface Exams {
  name: string;
  score: number;
}
const exams: Exams[] = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];
const sum: number = exams.reduce(
  (accumulator, exam) => accumulator + exam.score,
  0
);
const sumA: number = exams.reduce(
  (accumulator, exam) =>
    exam.score > 4 ? accumulator + exam.score : accumulator + 0,
  0
);
const sumM: number =
  exams.reduce((accumulator, exam) => accumulator + exam.score, 0) /
  exams.length;
