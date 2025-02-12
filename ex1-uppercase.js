let inputtext = " hello    world good  morning";

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

console.log("Modified text:", uppercaseFirstLetter(inputtext));
