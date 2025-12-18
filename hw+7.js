//Задание 1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));



//Задание 2
function isPositive(num) {
return num > 0;
}
function isMale(person) {
return person.gender === 'male';
}
function filter(arr, ruleFunction) {
const result = [];
  
  for (let i= 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
    result.push(arr[i]);  
    }
  } 
  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));



//Задание 3
const startTime = Date.now();
const endTime = startTime + duration;

// Функция для вывода текущей даты
function logCurrentDate() {
  const now = new Date();
  console.log(now.toLocaleString());
}

// Запускаем периодический вывод даты
const timer = setInterval(() => {
  logCurrentDate();
}, 3000);

// Через 30 секунд останавливаем таймер и выводим финальное сообщение
setTimeout(() => {
  clearInterval(timer);
  console.log('30 секунд прошло');
}, 30000);



//Задание 4
function delayForSecond(callback) {
  setTimeout(callback, 1000); // 1000 мс = 1 секунда
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});




//Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log('Привет, ${name}!');
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(function () {sayHi('Глеб')})