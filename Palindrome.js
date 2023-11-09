const check_palindrome = (str) => {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = str[i]; // Forward part
    let y = str[j - i]; // Backward part

    if (x !== y) {
      return false;
    }
  }
  return true;
};

const Is_palindrome = (str) => {
  let isPalindrome = check_palindrome(str);

  if (isPalindrome === true) {
    console.log("The Entered String is Palindrome");
  } else {
    console.log("The Entered String Is Not Palindrome");
  }
};

let test = "anana";
Is_palindrome(test);