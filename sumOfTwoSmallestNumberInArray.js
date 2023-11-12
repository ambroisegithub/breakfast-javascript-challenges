// Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455

// const sumOfTwoSmallestNumberInArray = (numbers) => {
//   // sort elements with ascending order
//   numbers.sort((a, b) => a - b);
//   let result = numbers[0] + numbers[1];
//   return result;
// };

// let array = [100, 44, 1, 3, 14, 34];
// console.log(sumOfTwoSmallestNumberInArray(array));

const sumOFTwosmall = (numbers) => {
  numbers.sort((a, b) => a - b);
  let result = numbers[0] + numbers[1];
  return result;
};

let array = [100, 20, 1, 3];
console.log(sumOFTwosmall(array));
