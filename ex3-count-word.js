let inputtext = "    hello     world      ";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a text: ", (text) => {
  console.log("Count word:", countWord(text));
  readline.close();
});

function countWord(text) {
  let result = [];
  let textList = text.split(" ");
  textList.forEach((word) => {
    if (word !== "") {
      result[word] = (result[word] || 0) + 1;
    }
  });
  return result;
}
