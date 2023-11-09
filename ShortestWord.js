function findShort(s) {
  // Split the string into an array of words
  const words = s.split(" ");

  // Initialize a variable to keep track of the shortest word length
  let shortestLength = Infinity;

  // Iterate through the words and update shortestLength if a shorter word is found
  for (const word of words) {
    const wordLength = word.length;
    if (wordLength < shortestLength) {
      shortestLength = wordLength;
    }
  }

  return shortestLength;
}

// Example usage:
const inputString =
  "Simple given a string of words return the length of the shortest word";
const shortestWordLength = findShort(inputString);
console.log(shortestWordLength); // Output: 1


