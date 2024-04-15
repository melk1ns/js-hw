//task 1
const arr = [1, 2, 3];
arr[2] = 10;
console.log(arr);
//task 2
const arr1 = ["test", "text", "try"];
arr1[3] = "qwer";
console.log(arr1);
//task 3
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
  sum = sum + arr2[i];
}
console.log(sum);
//task 4
const arr3 = [1, 2, 3, 4, 5];
for (num of arr3) {
  console.log(num);
}
//task 5
const arr4 = ["qwert", "qwertyuio", "qwe", "q", "qwertyuiop"];
for (str of arr4) {
  if (str.length > 5) {
    console.log(str);
  }
}
//task 6
const arr5 = [23, 567, 2, 89, 11, 39, 44, 78, 4, 27];
let max = arr5[0];
for (let i = 0; i > arr5.length; i++) {
  if (arr5[i] > max) {
    max = arr5[i];
  }
}
console.log(max);
//task 7
const arr6 = [12, 45, 78, 94, 34, 67, 13, 65, 87, 8];
for (num of arr6) {
  if (num % 2 === 0) {
    console.log(num);
  }
}
console.log(num);
