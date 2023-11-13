

const arrayDifference = (array1, array2) => {
  return array1.filter((elements) => !array2.includes(elements));
};

var array1 = [1, 3, 4, 5, 6];
var array2 = [1, 3, 9, 0, 11];

console.log(arrayDifference(array1, array2));
