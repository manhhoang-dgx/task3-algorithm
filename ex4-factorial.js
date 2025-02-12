let input = 100;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a number n: ", (num) => {
  input = parseFloat(num);
  console.log(`${num}! = ${factorial(input)}`);
  readline.close();
});

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
