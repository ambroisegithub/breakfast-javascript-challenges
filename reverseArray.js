// first way
const reverseArray = (array) => {
  let reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray += array[i];
  }

  return reversedArray;
};
let originalArray = ["A", "B", "C", "D"];
let reversed = reverseArray(originalArray);

console.log(reversed);
// second way
// var colors = [
//   "blue",
//   "white",
//   "green",
//   "navy",
//   "pink",
//   "purple",
//   "orange",
//   "yellow",
//   "black",
//   "brown",
// ];
// var reversedColors = colors.reverse();
// console.log(reversedColors);
