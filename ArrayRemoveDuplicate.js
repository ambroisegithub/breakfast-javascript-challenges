
const removeDuplicate = (array) => {
  return [...new Set(array)];
};

var array = [12, 12, 34, 50];

console.log(removeDuplicate(array));

const removeDuplicateInString = (String1) => {
  return [...new Set(String1)].join("");
};

var String1 = "aaambroise";

console.log(removeDuplicateInString(String1));
