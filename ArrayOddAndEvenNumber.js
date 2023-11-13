

const arrayfilter = (array = [], filter = "odd") => {
  var even = [];
  var odd = [];

  for (let item of array) {
    if (item % 2 === 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  }
  if (filter === "odd") {
    return odd;
  } else {
    return even;
  }
};
var Array2 = [2, 4, 7, 9, 3];
console.log("The even number", arrayfilter(Array2, "even"));
console.log("The odd number", arrayfilter(Array2));