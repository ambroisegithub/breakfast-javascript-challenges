const removeDuplicate = (array) => {
  return [...new Set(array)];
  // return Array.from/(new Set(array));
};

var array = [12, 12, 4, 55, 45, 45];

var result = removeDuplicate(array);
console.log(result);
