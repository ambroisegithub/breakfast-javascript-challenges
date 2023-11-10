// forEach() Methods:it used to  display every array elements;

var array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));
// The Array.map() method allows you to iterate over an array and modify its elements using a callback function.
function transformArray(arr, transformation) {
  return arr.map(transformation);
}

let arr = [3, 4, 5, 6];

let modifiedArr = transformArray(arr, function (element) {
  return element * 3;
});

console.log(modifiedArr);

// let arr = [3, 4, 5, 6];

// let modifiedArr = arr.map(function(element){
//     return element *3;
// });

// console.log(modifiedArr); // [9, 12, 15, 18]

//concatination of an arrays;

const arrayA = ["a", "b", "c"];
const arrayB = ["d", "e", "f"];
const arrayC = arrayA.concat(arrayB);

console.log(arrayC);
//push method is used to add the elements into an array;
const countries = ["Nigeria", "Ghana", "Rwanda"];

countries.push("Kenya");

console.log(countries);
countries.pop();
console.log(countries);

//splice() methods: the general purpose of this is to change the contents of an array by removing,adding, replacing the elements of an array at specific index.;

console.log(countries.splice(0, 4, "Congo"));
