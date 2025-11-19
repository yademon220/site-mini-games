let password = '333';
pass = prompt("Введите пароль");
pass === password ? alert("Пароль введен верно") : alert("Пароль введен неправильно");

let c = prompt("Введите цифру");
c > 0 && c <= 10 ? alert("верно") : alert("неверно");

let d = prompt("Введите 1е число");
let e = prompt("Введите 2е число");
d > 100 || e > 100 ? alert("верно") : alert("неверно");

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = Number(prompt("Введите номер месяца"));
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    alert("Сезон: зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("Сезон: весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("Сезон: лето");
    break;
  case 9:
  case 10:
  case 11:
    alert("Сезон: осень");
    break;

  default: alert('Такого номера месяца не существует!');
    break;
}

let Num = Number(prompt("Пожалуйста, введите любое число"));
Num %= 2;
Num === 0 ? alert("Число четное") : alert("Число НЕчетное");

let clientOS1 = 1;
if (clientOS1 == 0) {
  console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS1 == 1) {
  console.log("Установите версию приложения для Android по ссылке");
} else {
  console.log("Неподдерживаемая ОС");
}

let clientOS = 1;
let clientDeviceYear = 2020;
if (clientOS == 0 && clientDeviceYear >= 2015) {
  console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS == 0 && clientDeviceYear < 2015) {
  console.log("Установите облегченную версию приложения для iOS по ссылке");
} else if (clientOS == 1 && clientDeviceYear >= 2015) {
  console.log("Установите версию приложения для Android по ссылке");
} else if (clientOS == 1 && clientDeviceYear < 2015) {
  console.log("Установите облегченную версию приложения для Android по ссылке");
} else {
  console.log("Неподдерживаемая ОС");
}