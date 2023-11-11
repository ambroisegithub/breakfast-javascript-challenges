

const maximum = (array) => {
  var max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (max > array[i]);
    max = array[i];
  }
  return max;
};

const minimum = (array1) => {
  var min = array1[0];

  for (let i = 1; i < array1.length; i++) {
    if (array1[i] < min) min = array1[i];
  }
  return min;
};

let array = [10, 2, 30, 40, 50, 60, 109];

console.log("The maximun number  in array  " + maximum(array));
console.log("The manimun number  in array  " + minimum(array));
