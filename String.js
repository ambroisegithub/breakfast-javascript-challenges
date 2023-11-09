//toUpperCase and toLowerCase

var firstName = "Muhayimana ambroise";
console.log(firstName.toUpperCase());
console.log(firstName.toLocaleLowerCase());

//Includes Methods this is used to check whether the given part in Specified String is includes inside the  string and return true or false according to ...

console.log(firstName.includes("ambroise"));
console.log(firstName.includes("kamali"));

//The indexOf() methods
console.log(firstName.indexOf("a", 1));
console.log(firstName.indexOf("a", 4));
// The startsWith() & endsWith() methods

let dish = "Lemon curry";
console.log(dish.startsWith("Lem")); // true
console.log(dish.endsWith("rryx"));
console.log(dish.startsWith("lem")); // false
console.log(dish.toLowerCase().startsWith("lem")); // true
console.log(dish.startsWith("cu")); // false
console.log(dish.startsWith("cu", 6)); // true

console.log(dish.endsWith("on", 5)); // true)

// The slice() & substring() methods
// These two methods are almost identical, except for a few differences. One of them is that
// if the first index passed to substring() is greater than the second index, the two arguments are exchanged so that
//  a string is still returned. In the same scenario, the slice() method returns an empty string instead:
var sentence = "Always look on the bright side of life";
console.log(sentence.substring(11, 7));
console.log(sentence.substring(7));
console.log(sentence.slice(7));
console.log(sentence.slice(11, 7));
console.log(sentence.slice(0, 11));
// The split() method

// The split() method takes a separator argument and breaks a string up, according to the occurrence
// of the separator character inside the string. Then, it returns an array of strings

var splitSentence =
  "Split Methids is used to convert string into Posiible array alement";
