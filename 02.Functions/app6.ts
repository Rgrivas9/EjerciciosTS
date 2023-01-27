const duplicates: string[] = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
const removeDuplicates = (list: string[]): string[] => {
  list.sort();
  const newlist: string[] = [];
  let index:number=0
  for (const obj of list){index++;if (obj!=list[index]){newlist.push(obj)}}
  return newlist;
};
console.log(removeDuplicates(duplicates))
