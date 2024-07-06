//task 1
const user = {
  hobby: "reading",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
const { hobby, premium, mood } = user;
console.log(hobby, premium, mood);
//task 2
function countProps(obj) {
  return Object.keys(obj).length;
}

const user = {
  hobby: "skydiving",
  premium: false,
  mood: "happy",
};
console.log(countProps(user));
const { hobby, premium, mood } = user;
console.log(hobby, premium, mood);
//task 3
function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee = "";

  for (const [employee, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = employee;
    }
  }

  return bestEmployee;
}

const employees = {
  a: 23,
  b: 34,
  c: 19,
  d: 96,
};

console.log(findBestEmployee(employees));
const { a, b, c, d } = employees;
console.log(a, b, c, d);
//task 4
function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const salary of Object.values(employees)) {
    totalSalary += salary;
  }

  return totalSalary;
}

const employees = {
  a: 1000,
  b: 200,
  c: 30,
  d: 4,
};

console.log(countTotalSalary(employees));
const { a, b, c, d } = employees;
console.log(a, b, c, d);
//task 5
function getAllPropValues(arr, prop) {
  const values = [];

  for (const obj of arr) {
    if (obj.hasOwnProperty(prop)) {
      values.push(obj[prop]);
    }
  }

  return values;
}

const products = [
  { name: "a", price: 1300, quantity: 4 },
  { name: "b", price: 2700, quantity: 3 },
  { name: "c", price: 400, quantity: 7 },
  { name: "d", price: 1200, quantity: 9 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));
console.log(getAllPropValues(products, "price"));

const [a, b, c, d] = products;
console.log(a, b, c, d);
//task 6
function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      break;
    }
  }

  return totalPrice;
}

const products = [
  { name: "a", price: 1300, quantity: 4 },
  { name: "b", price: 2700, quantity: 3 },
  { name: "c", price: 400, quantity: 7 },
  { name: "d", price: 1200, quantity: 9 },
];

console.log(calculateTotalPrice(products, "a"));
console.log(calculateTotalPrice(products, "b"));
console.log(calculateTotalPrice(products, "c"));
console.log(calculateTotalPrice(products, "d"));
const [a, b, c, d] = products;
console.log(a, b, c, d);
//task 7
const account = {
  balance: 0,
  transactions: [],

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      type: "deposit",
      amount: amount,
    });
    console.log(`Deposited ${amount}. Current balance: ${this.balance}`);
  },

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({
        type: "withdraw",
        amount: amount,
      });
      console.log(`Withdrew ${amount}. Current balance: ${this.balance}`);
    } else {
      console.log(`Insufficient funds. Current balance: ${this.balance}`);
    }
  },

  currentBalance() {
    return this.balance;
  },

  TransactionHistory() {
    return this.transactions;
  },
};

account.deposit(1984);
account.withdraw(50);
account.withdraw(700);
console.log(account.currentBalance());
console.log(account.TransactionHistory());
