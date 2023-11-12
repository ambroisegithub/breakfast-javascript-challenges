// const check_palindrome = (str) => {
//   let j = str.length - 1;
//   for (let i = 0; i < j / 2; i++) {
//     let x = str[i]; // Forward part
//     let y = str[j - i]; // Backward part

//     if (x !== y) {
//       return false;
//     }
//   }
//   return true;
// };

// const Is_palindrome = (str) => {
//   let isPalindrome = check_palindrome(str);

//   if (isPalindrome === true) {
//     console.log("The Entered String is Palindrome");
//   } else {
//     console.log("The Entered String Is Not Palindrome");
//   }
// };

// let test = "anana";
// Is_palindrome(test);

// function isPalindrome(str) {
//   return str.split('').reverse().join('') === str;
// }

// // Example usage
// const inputString = "madam";
// const isPalindromic = isPalindrome(inputString);
// console.log(isPalindromic); // Output: true

const checkPalindrome = (str) => {
  var j = str.length;
  for (let i = 0; i < j / 2; i++) {
    var x = str[i];
    var y = str[j - 1 - i];
    if (x !== y) {
      return "The entered string is not a palindrome.";
    }
  }
  return "The entered string is a palindrome.";
};

var text = "madam";
console.log(checkPalindrome(text));
