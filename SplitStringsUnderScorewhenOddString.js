const SplitStringsUnderScorewhenOddString = (str) => {
  let pairs = [];
  for (let i = 0; i < str.length; i = i + 2) {
    let pair = str.slice(i, i + 2);

    if (pair.length === 1) {
      pair += "_";
    }

    pairs.push(pair);
  }

  return pairs;
};

console.log(SplitStringsUnderScorewhenOddString("abcgh"));
