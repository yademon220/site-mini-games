//Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
  console.log(numbs[i]);
if (numbs[i] == 10) {
  break;  
}
}



//Задание 2 Вариант1
const massiv = [1, 5, 4, 10, 0, 3];
let position = -1;

for (let i = 0; i < massiv.length; i++) {
if (massiv[i] === 4) {
  position = i;
  break;  
}
}
console.log(position);

//Задание 2 Вариант2
const massiv1 = [1, 5, 4, 10, 0, 3];
  let position1 = massiv1.indexOf(4);
  console.log(position1);



//Задание 3
const arr = [1, 3, 5, 10, 20];
let arrJoin = arr.join(" ");
console.log(arrJoin);


//Задание 4
let arr1 = [];

for (let i = 0; i < 3; i++) {
  let row = [];
  for (let j = 0; j < 3; j++) {
    row.push(1);
  }
  arr1.push(row);
}
console.log(arr1);


//Задание 5
let boom = [1, 1, 1];
for (let i = 0; i < 3; i++) {
  boom.push(1);
}
console.log(boom);


//Задание 6
let deleteA = [9, 8, 7, 'a', 6, 5];
  deleteA = deleteA.filter(item => item !== 'a');
  deleteA.sort();
  
console.log(deleteA);


//Задание 7
let guess = [9, 8, 7, 6, 5];
let numberUser = Number(prompt("Угадай число в массиве"));
let isFound = guess.includes(numberUser)
isFound ? alert("верно") : alert("неверно");


//Задание 8
let abc = 'abcdef';
console.log(abc.split('').reverse().join(''));


//Задание 9
let array = [[1, 2, 3],[4, 5, 6]];
console.log([...array[0],...array[1]]);


//Задание 10
let apple = [];
for (let i = 0; i < 10; i++) {
  apple.push(Math.floor(Math.random() * 10) + 1);
}

console.log(apple);

for (let i = 0; i < 9; i++) {
let sum = apple[i] + apple[i + 1];
  console.log(sum);
}



//Задание 11
let coconut = [2, 4, 5];
function bounty (arr) {
  const updatedBounty = arr.map(item => item ** 2);
  console.log(updatedBounty);
}
bounty(coconut);


//Задание 12
let fruits = ["яблоко", "банан", "вишня", "лайм", "грейфрут"];
function lengthWords (arr) {
  const updateLengthWords = arr.map(item => item.length);
  console.log(updateLengthWords);
}
lengthWords(fruits);


//Задание 13
let popcorn = [];
for (let i = 0; i < 10; i++) {
  const randomNum = Math.floor(Math.random() * 201) - 100;
  popcorn.push(randomNum);
}
console.log(popcorn);

function negativeNumbers (arr) {
  const updateNegativeNumbers = arr.filter(item => item < 0);
  console.log(updateNegativeNumbers);
}
negativeNumbers(popcorn);


//Задание 14
let nut = [];
for (let i = 0; i < 10; i++) {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  nut.push(randomNum);
}
console.log(nut);

function evenNumbers (arr) {
  const updateevenNumbers = arr.filter(item => item % 2 == 0);
  console.log(updateevenNumbers);
}
evenNumbers(nut);


//Задание 15
let salt = [];
for (let i = 0; i < 6; i++) {
  const randomSalt = Math.floor(Math.random() * 10) + 1;
  salt.push(randomSalt);
}
console.log(salt);

function arithmeticMean (arr) {
  const sum = arr.reduce((total, number) => (total + number) , 0);  
  const updateArithmeticMean = sum / arr.length;
  console.log(updateArithmeticMean);
}
arithmeticMean(salt);

