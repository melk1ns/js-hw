// task 1
const showMessage = () => alert("Hello World!");

showMessage();
// task 2
const randomNumber = Math.floor(Math.random() * 100) + 1;

const check = (randomNumber, guessNumber) => {
  if (guessNumber === randomNumber) {
    return "Число співпадає";
  } else {
    return "Число не співпадає.";
  }
};
// task 4
const applyCallback = (array, callback) => {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    resultArray.push(callback(array[i]));
  }
  return resultArray;
};

const numbers = [5, 2, 3, 1, 5];
const callbackFunction = (num) => num - 1;

const result = applyCallback(numbers, callbackFunction);
console.log(result);
//task 5
const calculateDiscountPrice = (price, discount, callback) => {
  return callback(price, discount);
};

const discountCalculator = (price, discount) => {
  return price - price * (discount / 100);
};

const primaryPrice = 4500;
const interest = 65;

const discountedPrice = calculateDiscountPrice(
  primaryPrice,
  interest,
  discountCalculator
);
console.log(discountedPrice);
