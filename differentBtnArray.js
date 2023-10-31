// this is to find difference between two array, this return the array values that present in array one but not belong  too array two

const ArrayDifference = (array1, array2) => {
  return array1.filter((item) => !array2.includes(item));
};

const CallArrayDiff = () => {
  let array1 = [1, 2, 3, 4];
  let array2 = [3, 8, 4];
  let result = ArrayDifference(array1, array2);
  return result;
};

console.log(CallArrayDiff());
