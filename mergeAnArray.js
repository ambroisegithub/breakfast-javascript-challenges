

const concatinationArray = (...arr) => {
  return [].concat(...arr);
};

var fruits = ["apple", "banana", "orange"];
var meat = ["poultry", "beef", "fish"];
var vegetables = ["potato", "tomato", "cucumber"];
console.log(concatinationArray(fruits, meat, vegetables));
// var fruits = ["apple", "banana", "orange"];
// var meat = ["poultry", "beef", "fish"];
// var vegetables = ["potato", "tomato", "cucumber"];
// var food = [...fruits, ...meat, ...vegetables];
// console.log(food); // [“apple”, “banana”, “orange”, “poultry”, “beef”, “fish”, “potato”, “tomato”, “cucumber”]
