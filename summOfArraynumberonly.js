// function sumNumbersInArray(arr) {
//     let total = 0;

//     for (let i = 0; i < arr.length; i++) {
//       // Check if the current element is a number
//       if (typeof arr[i] === 'number') {
//         // Add the number to the total
//         total += arr[i];
//       }
//     }

//     return total;
//   }

//   // Example usage:
//   const mixedArray = [1, 2, 'three', 4, 'five', 6];
//   const result = sumNumbersInArray(mixedArray);

//   console.log(result); // Output: 13 (1 + 2 + 4 + 6)

const sumOFnumbersOnlyInMixedArray = (array) => {
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
    }
  }
  return sum;
};

var result = [10, 20, 30, "number",6];
console.log(sumOFnumbersOnlyInMixedArray(result));
