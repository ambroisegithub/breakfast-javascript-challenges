let numbers = [30, 50, 90, 100];
let result = true;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 100) {
    result = false;
  }
}
console.log(result);
