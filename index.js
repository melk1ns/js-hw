//task 1
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let str = " ";
for (let i = 0; i < friends.length; i++) {
  str += friends[i];
  if (i < friends.length - 1) {
    str += ",";
  }
}
console.log(str);
console.log(friends.join(","));
//task 2
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
console.log(cards);
//task 3
const cardToRemove = cards.splice(2, 1);
console.log(cards);
//task 4
const cardToInsert = cards.splice(4, 0, "Карточка-6");
console.log(cards);
//task 5
const cardToUpdate = cards.splice(2, 1, "Карточка-4test");
console.log(cards);
