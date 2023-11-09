// function isPrime(number) {
//   if (number === 1) {
//     return "1 is not a prime number.";
//   } else if (number === 2) {
//     return "2 is a prime number.";
//   } else {
//     for (var divisor = 2; divisor < number; divisor++) {
//       if (number % divisor === 0) {
//         return number + " is not a prime number.";
//       }
//     }
//     return number + " is a prime number.";
//   }
// }

// console.log(isPrime(1));

const IsPrime = (number) => {
  if (number === 1) {
    return "1 Number is not a Prime number";
  } else if (number === 2) {
    return "2 Number is a prime number";
  } else {
    for (let divisor = 2; divisor < number; divisor++) {
      if (number % divisor === 0) {
        return number + "  is Not a prime number";
      }
    }
    return number + "  is  a prime number";
  }
};

console.log(IsPrime(7));
