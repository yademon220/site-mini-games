let a = 10;
alert(a);
a = prompt("Введите значение");
alert(a);

let iPhone = 2007;
alert("Год выпуска первого iPhone: " + iPhone);

let js = "Брендан Айк";
alert("создатель js - " + js);

let x = 10;
let y = 2;
let c = x + y;
let d = x - y;
let e = x * y;
let f = x / y;
alert(
  "сумма = " + c + "\n" +
  "разность = " + d + "\n" +
  "произведение = " + e + "\n" +
  "частное = " + f);

let result = 2 ** 5;
alert("степень 2 в 5 = " + result);

let aa = 9;
let bb = 2;
let result2 = aa % bb;
alert("модуль 9 в 2 = " + result2);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет");
alert("вам " + age + " лет");

const user = {
  name: "Алексей",
  age: 30,
  isAdmin: true
};

const userName = prompt('Пожалуйста, введите ваше имя:');
alert(`Привет, ${userName}!`);