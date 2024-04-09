//task 1
let num = 1;
while (num <= 10) {
  console.log(num);
  num += 1;
}
//task 2
for (let i = 2; i <= 20; i += 2) {
  if (i % 2 != 0) {
    continue;
  }
  console.log(i);
}
//task 3
for (let i = 7; i <= 70; i += 7) {
  console.log(i);
}
//task 7
for (let i = 0; i < 100; i += 1) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
//tack 8
let i = 0;
while (i <= 20) {
  i++;
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
