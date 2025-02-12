let input = [5, 2, 1, 5, 29, 3, 5, 7];

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

console.log("number of prime number:", countPrime(input));
