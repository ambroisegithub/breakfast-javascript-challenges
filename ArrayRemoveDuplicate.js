function removeDuplicates(array) {
  return Array.from(new Set(array));
}

function removeDuplicatesSpread(array) {
  return [...new Set(array)];
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

var uniqueFruits = removeDuplicates(fruits);
console.log(uniqueFruits); // returns ["banana", "apple", "orange", "watermelon", "grape"]

var uniqueFruits2 = removeDuplicatesSpread(fruits);
console.log(uniqueFruits2); // returns ["banana", "apple", "orange", "watermelon", "grape"]


