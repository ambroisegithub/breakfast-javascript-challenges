
function combineArrays(...arrays) {
    return [].concat(...arrays);
  }
  
  var fruits = ["apple", "banana", "orange"];
  var meat = ["poultry", "beef", "fish"];
  var vegetables = ["potato", "tomato", "cucumber"];
  
  var food = combineArrays(fruits, meat, vegetables);
  
  console.log(food);
  
// var fruits = ["apple", "banana", "orange"];
// var meat = ["poultry", "beef", "fish"];
// var vegetables = ["potato", "tomato", "cucumber"];
// var food = [...fruits, ...meat, ...vegetables];
// console.log(food); // [“apple”, “banana”, “orange”, “poultry”, “beef”, “fish”, “potato”, “tomato”, “cucumber”]
