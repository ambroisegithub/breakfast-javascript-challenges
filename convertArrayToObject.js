// function arrayToObject(arr) {
//     const obj = {};
//     for (let i = 0; i < arr.length; i++) {
//       obj[i] = arr[i];
//     }
//     return obj;
//   }

//   var fruits = ["banana", "apple", "orange", "watermelon"];
//   var fruitsObj = arrayToObject(fruits);

//   console.log(fruitsObj);

// var fruits = ["banana", "apple", "orange", "watermelon"];
// var fruitsObj = { ...fruits };
// console.log(fruitsObj);

const ConvertToArray = (arr) => {
  var obj = {};

  for (var element = 1; element < arr.length; element++) {
    obj[element] = arr[element];
  }
  return obj;
};
var fruits = ["banana", "apple", "orange", "watermelon"];
var result = ConvertToArray(fruits);
console.log(result);
