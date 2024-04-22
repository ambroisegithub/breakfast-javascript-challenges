const checkPalindrome = (str) => {
  var j = str.length;
  for (let i = 0; i < j / 2; i++) {
    var x = str[i];
    var y = str[j - 1 - i];
    if (x !== y) {
      return false;
    } else {
      return true;
    }
  }
};

const check_palindrome = "madam";

console.log(checkPalindrome(check_palindrome));
