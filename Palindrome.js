// const check_palindrome = (str) => {
//     let j = str.length - 1;
//     for (let i = 0; i < j / 2; i++) {
//         let x = str[i]; // Forward part
//         let y = str[j - i]; // Backward part

//         if (x !== y) {
//             return false;
//         }
//     }
//     return true;
// }

// const Is_palindrome = (str) => {
//     let isPalindrome = check_palindrome(str);

//     if (isPalindrome === true) {
//         console.log("The Entered String is Palindrome");
//     } else {
//         console.log("The Entered String Is Not Palindrome");
//     }
// }


// let test = "anana";
// Is_palindrome(test);


// function tto remove the duplicate element from the string



// function removeDuplicate(str) {
//     var lhs = new Set();
//     for (var i = 0; i < str.length; i++)
//         lhs.add(str[i]);;
//     for (var ch of lhs)
//         document.write(ch)
// }
// var str = "muhayimanaambroise";
// removeDuplicate(str);


// function reverseString(str){
//   var newString ="";
//   for(var i = str.length -1;i>=0;i--){
//     newString+=str[i];

//   }

//   return newString;
// }
// console.log(reverseString("hello"));



// const sameParityFilter = (arr = [], filter = "odd") => {
//     const odds = []
//     const evens = []

//     for(item of arr) {
//         if(item % 2 === 0) {
//             evens.push(item)
//         } else {
//             odds.push(item)
//         }
//     }

//     if(filter === "odd") {
//         return odds
//     } else {
//         return evens
//     }
// }

// console.log(sameParityFilter([1 , 7 , 5 , 6 , 7 , 1 , 2] ))

// console.log(sameParityFilter([1 , 7 , 5 , 6 , 7 , 1 , 2]))




// function OddEvenNumber(arr = [], filter === "odds") {
//     var odds = [];
//     var evens = [];
//     for (var item of arr) {
//         if (item % 2 === 0) {
//             evens.push(item);

//         } else {
//             odds.push(item);
//         }

//     }

//     if (filter === "odds") {
//         return odds;
//     } else {
//         return evens;
//     }

// }
// console.log("the array of evens number are:");
// console.log(OddEvenNumber([1, 3, 4, 5, 6, 7, 8, 9], "even"));
// console.log("the array of odds number is:");
// console.log(OddEvenNumber([1, 3, 4, 5, 6, 7, 8, 9]));