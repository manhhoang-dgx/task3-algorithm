let input = 100;

function factorial(num) {
  if (num < 0) return "Invalid input";
  if (!Number.isInteger(num)) return "Invalid input";
  let result = 1n;
  while (num > 0) {
    result *= BigInt(num);
    num--;
  }
  return result;
}

console.log(`${input}! = ${factorial(input)}`);
