//task 1
const bankAccount = {
  ownerName: "Hello World",
  accountNumber: "1234567890",
  balance: 20000,

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        `На рахунок було зараховано ${amount} грн. Ваш залишок: ${this.balance} грн`
      );
    } else {
      console.log("Сума повинна бути більшою за 0");
    }
  },

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `З рахунку було знято ${amount} грн. Ваш залишок: ${this.balance} грн`
      );
    } else if (amount > this.balance) {
      console.log("Недостатньо коштів на рахунку");
    } else {
      console.log("Сума повинна бути більшою за 0");
    }
  },
};
console.log(`Баланс: ${bankAccount.balance} грн.`);
bankAccount.deposit(5990);
bankAccount.withdraw(2600);
//task 2
const weather = {
  temperature: 0,
  humidity: 50,
  windSpeed: 10,

  isBelowFreezing() {
    return this.temperature < 0;
  },
};

const inputTemperature = parseFloat(prompt("Введіть температуру:"));
weather.temperature = inputTemperature;
const isFreezing = weather.isBelowFreezing();

if (isFreezing) {
  console.log("Температура нижче 0 градусів Цельсія");
} else {
  console.log("Температура вище або рівна 0 градусів Цельсія");
}
//task 3
const user = {
  name: "",
  email: "",
  password: "",
};
user.name = prompt("Введіть ваше ім'я:");
user.email = prompt("Введіть ваш email:");
user.password = prompt("Введіть ваш пароль:");

const inputEmail = prompt("Введіть email для входу:");
const inputPassword = prompt("Введіть пароль для входу:");

const isAuthenticated = user.login(inputEmail, inputPassword);
login(inputEmail, inputPassword);
{
  return this.email === inputEmail && this.password === inputPassword;
}
//task 4
const movie = {
  title: "qwert",
  director: "Nariman Aliyev",
  year: 2024,
  rating: 10,

  isHighlyRated() {
    return this.rating > 8;
  },
};

if (movie.isHighlyRated()) {
  console.log("Рейтинг фільму вище 8");
} else {
  console.log("Рейтинг фільму нище 8");
}
