let inputtext = "    hello     world      ";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a text: ", (text) => {
  console.log("Count letter:", countletter(text));
  readline.close();
});

function countletter(text) {
  let result = [];
  for (let i = 0; i < text.length; i++) {
    if (result[text[i]]) result[text[i]]++;
    else result[text[i]] = 1;
  }
  return result;
}
