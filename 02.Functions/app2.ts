const avengers: string[] = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
const findLongest = (list: string[]): string => {
  let longest: string = list[0];
  for (const word of list) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
};
