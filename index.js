//task 1
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(["Mango", "Poly", "Ajax"]);
//task 2
function calculateEngravingPrice(message, pricePerWord) {
  let words = message.split(" ");
  let number = words.length;
  let total = number * pricePerWord;

  return total;
}
calculateEngravingPrice("qwe wer ert rty", 20);
console.log(calculateEngravingPrice("qwe wer ert rty", 20));
//task 3
function findLongestWord(string) {
  let maxStr = " ";
  let strs = string.split(" ");
  for (const str of strs) {
    if (str.length > maxStr.length) {
      maxStr = str;
    }
  }
  return maxStr;
}
findLongestWord("fgh fgh sdfg sdfg sdfgddd");
console.log(findLongestWord("fgh fgh sdfg sdfg sdfgddd"));
//task 4
function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.substring(0, 40) + "...";
  }
}
// task 5
function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}
console.log(checkForSpam("false"));
console.log(checkForSpam("spam"));
console.log(checkForSpam("sale"));
console.log(checkForSpam("true"));
// task 6
let input;
const numbers = [];
let total = 0;

while ((input = prompt("Введіть число")) !== null) {
  if (isNaN(input)) {
    alert("Потрібно ввести число!");
    continue;
  }

  numbers.push(parseFloat(input));
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Сума чисел дорівнює ${total}`);
} else {
  console.log("Числа не були введені");
}
