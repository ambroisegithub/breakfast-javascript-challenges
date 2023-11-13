const TwocharacterInString = (str) => {
  if (str.length >= 2) {
    return str.slice(-2);
  } else {
    return "The String must Be at least Two character";
  }
};
var str = "muhayimana";
console.log(TwocharacterInString(str));
