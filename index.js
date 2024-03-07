//task 1
const field1 = prompt("Ім'я:");
const field2 = prompt("Email:");

if (field1 && field2) {
  alert("Обидва поля заповнені");
} else {
  alert("Не всі поля заповнені");
}

//task 2
const num1 = parseInt(prompt("Введіть перше число:"));
const num2 = parseInt(prompt("Введіть друге число:"));

const sum = num1 + num2;

if (sum > 10) {
  alert("Сума більша за 10");
} else {
  alert("Сума менша або дорівнює 10");
}

//task 3
const text = prompt("Ведіть текст");

if (text.includes("JavaScript")) {
  alert("Текст містить слово JavaScript");
} else {
  alert("Текст не містить слово JavaScript");
}

//task 4
const num3 = prompt("Ведіть числове значення");

if (num3 > 10 && num3 < 20) {
  alert("Число входить в діапазон від 10 до 20");
} else {
  alert("Число не входить в діапазон від 10 до 20");
}
//task 5
const name = prompt("Введіть ваше ім'я:");
const email = prompt("Введіть ваш email:");
const password = prompt("Введіть ваш пароль:");

if (name.length < 3) {
  alert("Ім'я повинне містити не менше 3 символів");
} else if (
  email.includes("@") &&
  email.includes(".") &&
  email.indexOf(".") < email.indexOf("@")
) {
  alert("Неправильний формат email");
} else if (password.length < 6) {
  alert("Пароль повинен містити не менше 6 символів");
} else {
  alert("Коректно заповнені дані");
}
