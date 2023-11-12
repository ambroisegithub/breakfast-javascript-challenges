// const removeDuplicate = (str) => {
//     const uniqueChars = new Set(str);
//     const uniqueString = [...uniqueChars].join('');
//     console.log(uniqueString);
//   };

//   const str = "ddiane";
//   removeDuplicate(str);

const removeDuplicate = (str) => {
  return [...new Set(str)].join("");
};

var inputString = "aaambroise";
var result = removeDuplicate(inputString);
console.log(result);
