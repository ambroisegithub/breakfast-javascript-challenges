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

console.log(dish.endsWith('on', 5))// true)
