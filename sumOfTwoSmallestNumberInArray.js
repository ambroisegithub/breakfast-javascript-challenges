const sumOfTwoSmallestNumberInArray = (numbers) => {
  // sort elements with ascending order
  numbers.sort((a, b) => a - b);
  let result = numbers[0] + numbers[1];
  return result;
};

let array = [100, 44, 1, 3, 14, 34];
console.log(sumOfTwoSmallestNumberInArray(array));
