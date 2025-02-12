let inputtext = "";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a text: ", (text) => {
  inputtext = text;
  console.log("Modified text:", uppercaseFirstLetter(inputtext));
  readline.close();
});

function uppercaseFirstLetter(text) {
  let result = "";
  let prevIsSpace = true;
  for (let i = 0; i < text.length; i++) {
    if (prevIsSpace) result += text[i].toUpperCase();
    else result += text[i];
    if (text[i] === " ") prevIsSpace = true;
    else prevIsSpace = false;
  }
  return result;
}
