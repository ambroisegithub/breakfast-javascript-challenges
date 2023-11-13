

const removeDuplicate = (str) => {
  return [...new Set(str)].join("");
};

var inputString = "aaambroise";
var result = removeDuplicate(inputString);
console.log(result);
