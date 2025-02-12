let n = 10;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a number n: ", (num) => {
  n = parseFloat(num);
  console.log(`Fibonacci no ${num} is: ${fibonacci(n)}`);
  readline.close();
});

function fibonacci(n) {
  if (n <= 0) return "Invalid input";
  if (!Number.isInteger(n)) return "Invalid input";
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}
