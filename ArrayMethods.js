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
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//shift() It used to remove the first element in an array;
fruits.shift();
console.log(fruits);
// unshift() Methods is used to add the element in array at the first index;
fruits.unshift("Lemon");
console.log(fruits);

//join() methods: it is used to join the array elements as single string or number
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(""));
// expected output: "FireAirWater"

console.log(elements.join("-"));
// filter() methods is used to create a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
var results = words.filter((word) => word.length > 8);
console.log(results);

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// expected output: 1

// start from index 2
console.log(beasts.indexOf("bison", 2));
// expected output: 4

console.log(beasts.indexOf("giraffe"));
// reverse()
const reversearr = ["one", "two", "three"];
console.log("array1:", reversearr);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = reversearr.reverse();
console.log("reversed:", reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

//sort

// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// array.sort( compareFunction );
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const arraysort = [1, 30, 4, 21, 100000];
arraysort.sort();
console.log(arraysort);
