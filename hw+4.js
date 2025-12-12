// Задание 1
function minNumb() {
const a = Number(prompt("Введите число №1:"));
const b = Number(prompt("Введите число №2:"));
let min = 0;
if (a>b) {
  min = b;
}
else if (a<b) {
  min = a;
}
else {min = a;
}
alert("Меньшее число: " + min);
}

minNumb()

// Задание 1// тоже самое но через цикл
function minNumb2() {
const numbers = [];
for (let i = 0; i < 2; i++) {
    const input = prompt(`Введите число №${i + 1}:`);
    numbers.push(Number(input));}
  
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
alert("Меньшее число: " + min);
}

minNumb2()

// Задание 2
function evenOdd() {
let c = Number(prompt("Введите число:"));
if (isNaN(c)) {
    alert("Пожалуйста, введите корректное число!");
} else {
    c % 2 == 0 ? alert('Число четное') : alert('Число НЕчетное')};
}

evenOdd()



// Задание 3
// Задание 3 Первая функция
function printSquare(number) {
  const square = number ** 2;
  console.log(`Квадрат числа ${number} = ${square}`);
}
printSquare(5); 
printSquare(3); 

// Задание 3 Вторая функция
function getSquare(number) {
  return number ** 2;
}

const result = getSquare(4);
console.log(result); 

const area = getSquare(6) * 2; 
console.log(area); 



// Задание 4
function checkAge() {
  let age = Number(prompt("Сколько вам лет?"));
    if (isNaN(age)) {
      alert("Пожалуйста, введите корректное число!");
      return;
  } 
    if (age<0) {
      alert("Вы ввели неправильное значение");
      return;
  } 
    if (age>=13) {
      alert("Добро пожаловать!");
  } else {
      alert("Привет, друг!");
  }
}

checkAge()


// Задание 5
function multiply(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return null;
    }
    return number1 * number2;
}

function runCalculation() {
    const n1 = Number(prompt("Введите число 1:"));
    const n2 = Number(prompt("Введите число 2:"));

    const result = multiply(n1, n2);

    if (result === null) {
        alert("Одно или оба значения не являются числом");
    } else {
        alert(`Результат: ${result}`);
        console.log(result);
    }
}

runCalculation();



// Задание 6
function getCube() {
  let j1 = Number(prompt("Введите число:"));
  let result = 0;
  if (isNaN(j1)) {
    console.log("Переданный параметр не является числом");
    return;
  } 
    result = j1 ** 3;
    console.log(j1 + " в кубе равняется " + result);
}

getCube();


// Задание 7
const pi = 3.14;
const circle1 = {
  radius: 3,
  getArea() {
    const area = pi * this.radius ** 2;
    return area;
  },
  getPerimeter() {
    const pi = 3.14;
    const Perimeter = pi * this.radius * 2;
    return Perimeter;
  }
}

const circle2 = {
  radius: 4,
  getArea() {
    const area = pi * this.radius ** 2;
    return area;
  },
  getPerimeter() {
    const pi = 3.14;
    const Perimeter = pi * this.radius * 2;
    return Perimeter;
  }
}

console.log(`Площадь = ${circle1.getArea()}, периметр = ${circle1.getPerimeter()}`);
console.log(`Площадь = ${circle2.getArea()}, периметр = ${circle2.getPerimeter()}`);


