// task 1
const select = Number(prompt("Введіть цифру выд 1 до 3"));

switch (select) {
  case 1:
    alert("Ви вибрали каву!");
    break;
  case 2:
    alert("Ви вибрали чай!");
    break;
  case 3:
    alert("Ви вибрали сік!");
    break;
  default:
    alert("Ви нічого не вибрали");
}

//task 2
const weekday = prompt("Please enter a day of the week");
switch (weekday) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    alert("it's a working day");
    break;
  case "saturday":
  case "sunday":
    alert("it's a day off");
    break;
  default:
    alert("Incorrectly filled data");
}

// task 3
const month = Number(prompt("Please enter a month of the year"));

switch (month) {
  case 1:
  case 2:
  case 12:
    alert("it is winter");
    break;
  case 3:
  case 4:
  case 5:
    alert("it is spring");
    break;
  case 6:
  case 7:
  case 8:
    alert("it is summer");
    break;
  case 9:
  case 10:
  case 11:
    alert("it is autumn");
    break;
  default:
    alert("Incorrectly filled data");
}

//task 4
const month1 = Number(prompt("Please enter a month of the year"));

switch (month1) {
  case 2:
    alert("28 - 29");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert(30);
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert(31);
    break;
  default:
    alert("Incorrectly filled data");
}

//task 5
const color = prompt("Please enter a color");

switch (color) {
  case "red":
    alert("stop");
    break;
  case "green":
    alert("go");
    break;
  case "yellow":
    alert("wait");
    break;
  default:
    alert("Incorrectly filled data");
}

//task 6

const firstNumber = Number(prompt("Please enter the first number"));
const action = prompt("Please enter an action +, -, *, /");
const secondNumber = Number(prompt("Please enter the second number"));

switch (action) {
  case "+":
    alert($(firstNumber) + $(secondNumber) - $(firstNumber + $secondNumber));
    break;
  case "-":
    alert($(firstNumber) - $(secondNumber) - $(firstNumber - secondNumber));
    break;
  case "*":
    alert($(firstNumber) * $(secondNumber) - $(firstNumber * secondNumber));
    break;
  case "/":
    alert($(firstNumber) / $(secondNumber) - $(firstNumber / secondNumber));
    break;
  default:
    alert("Incorrectly filled data");
}
