const reverseString = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

console.log(reverseString("ambroise"));
function reversestring(str) {
  return str.split("").reverse().join("");
}

console.log(reversestring("Hello, World!")); // Outputs: "!dlroW ,olleH"
