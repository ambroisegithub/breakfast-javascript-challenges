const clearArray = (arr) => {
  arr.length = 0;
};

var fruits = [
  "banana",
  "apple",
  "orange",
  "watermelon",
  "apple",
  "orange",
  "grape",
  "apple",
];
clearArray(fruits);

console.log(fruits); // Outputs: []

// var fruits = [
//     "banana",
//     "apple",
//     "orange",
//     "watermelon",
//     "apple",
//     "orange",
//     "grape",
//     "apple",
//   ];


// fruits.length = 0;
// console.log(fruits); // returns []
