function findDuplicatedValues(arr1, arr2) {
  // return [...new Set(arr1)].filter((item) => arr2.includes(item));
  return arr1.filter((item) => arr2.includes(item));
}

var numOne = [0, 2, 4, 6, 8, 8];
var numTwo = [1, 2, 3, 4, 5, 6];

var duplicatedValues = findDuplicatedValues(numOne, numTwo);

console.log(duplicatedValues); // Outputs: [2, 4, 6]

//   var numOne = [0, 2, 4, 6, 8, 8];
// var numTwo = [1, 2, 3, 4, 5, 6];
// var duplicatedValues = [...new Set(numOne)].filter(item => numTwo.includes(item));
// console.log(duplicatedValues); // returns [2, 4, 6
