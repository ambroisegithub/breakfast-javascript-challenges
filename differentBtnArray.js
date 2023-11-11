
const differenceBtnArray = (array1, array2) => {
  return array1.filter((elements) => !array2.includes(elements)); //[ 1, 2 ]
  // return array1.filter((elements) => array2.includes(elements));//[ 3, 4 ]
};

let array1 = [1, 2, 3, 4];
let array2 = [3, 8, 4];
var result = differenceBtnArray(array1, array2);

console.log(result);
