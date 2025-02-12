let input = [5, 2, 1, 5, 29, 3, 5, 7];

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a list of numbers separated by space: ", (text) => {
  input = text.split(" ").map((num) => parseFloat(num));
  console.log("number of prime number:", countPrime(input));
  readline.close();
});

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (!Number.isInteger(num)) return false;
  for (let i = 2; i <= Math.round(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function countPrime(input) {
  let result = 0;
  input.forEach((num) => {
    if (isPrime(num)) result++;
  });
  return result;
}
