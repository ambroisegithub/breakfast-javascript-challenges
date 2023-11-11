const SumOfEvenNumber = (array) => {
  var sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }

    // if (array[i] % 2 !== 0) { //Odd number
    //     sum += array[i];
    //   }
  }
  return sum;
};

var array1 = [10, 8, 9, 4, 5];

console.log(SumOfEvenNumber(array1));
