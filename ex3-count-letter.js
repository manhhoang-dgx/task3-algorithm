let inputtext = "hello world";

function countletter(text) {
  let result = [];
  for (let i = 0; i < text.length; i++) {
    if (result[text[i]]) result[text[i]]++;
    else result[text[i]] = 1;
  }
  return result;
}

console.log("Count letter:", countletter(inputtext));
