function arrayToObject(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[i] = arr[i];
    }
    return obj;
  }
  
  var fruits = ["banana", "apple", "orange", "watermelon"];
  var fruitsObj = arrayToObject(fruits);
  
  console.log(fruitsObj);
  

// var fruits = ["banana", "apple", "orange", "watermelon"];
// var fruitsObj = { ...fruits };
// console.log(fruitsObj);