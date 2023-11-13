

const IsPrimeNumber = (number) => {
  if (number === 1) {
    return "The Number is Not Prime";
  } else if (number === 2) {
    return "The Number is Prime";
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return number + " Is Not Prime number";
      } else {
        return number + " Is Prime Number";
      }
    }
  }
};

var number = IsPrimeNumber(8);
console.log(number);
