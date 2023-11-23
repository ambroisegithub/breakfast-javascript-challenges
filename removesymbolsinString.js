const extractLetters = (inputString) => {
  // Define a regular expression to match vowels, consonants, and spaces
  const letterRegex =
    /[aeiouAEIOUbcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ ]/g;

  // Use the regular expression to filter out symbols
  const filteredString = inputString.match(letterRegex);

  // Join the filtered characters to form the result string
  const resultString = filteredString ? filteredString.join("") : "";

  return resultString;
};

// Example usage:
const inputString = "Hello, World! This is a test ''''@@@%%%%string.";
const result = extractLetters(inputString);
console.log(result);
