interface Alumn {
  name: string;
  T1: boolean;
  T2: boolean;
  T3: boolean;
  isApproved?: boolean;
}

const alumns: Alumn[] = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

const checkT = (obj: Alumn): boolean => {
  const checked: boolean = true;
  return obj.T1 == false && obj.T2 == false
    ? false
    : obj.T1 == false && obj.T3 == false
    ? false
    : obj.T3 == false && obj.T2 == false
    ? false
    : checked;
};
const isApproved = (list: Alumn[]): Alumn[] => {
  for (const obj of list) {
    obj.isApproved = checkT(obj);
  }
  return list;
};
console.log(isApproved(alumns));
