function replaceElements(arr, startIndex, count, ...newElements) {
  arr.splice(startIndex, count, ...newElements);
}

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

replaceElements(fruits, 0, 2, "potato", "tomato");
console.log(fruits);

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
//   fruits.splice(0, 2, "potato", "tomato");
//   console.log(fruits);
