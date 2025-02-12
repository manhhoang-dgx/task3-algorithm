let n = 10;

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
  return fib[n];
}

console.log(`Fibonacci no ${n} is: ${fibonacci(n)}`);
