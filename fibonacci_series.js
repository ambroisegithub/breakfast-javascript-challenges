// const number = parseInt(prompt("Please Enter any number"));

function fibonacci_series(number) {
  let number1 = 0;
  let number2 = 1;
  let nextNumber;
  const fibonacci_sequence = [];

  for (let i = 0; i <= number; i++) {
    fibonacci_sequence.push(number1); // Append number1 to the array
    nextNumber = number1 + number2;
    number1 = number2;
    number2 = nextNumber;
  }

  return fibonacci_sequence;
}

var number_test = 7;
//  how many numbers to generate in the Fibonacci sequence. For example, if number_test is 7, the function will calculate and return the first 8 Fibonacci numbers (0, 1, 1, 2, 3, 5, 8, 13).
const fibonacci_sequence = fibonacci_series(number_test);
console.log(fibonacci_sequence); // This will print the Fibonacci sequence up to 7

