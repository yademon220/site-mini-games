for (let b = 0; b < 2; b++) {
    console.log('Привет');
}

for (let k = 1; k <=5; k++) {
    console.log(k);
}

for (let m = 7; m <=22; m++) {
    console.log(m);
}

const obj = {
"Коля" : '200',
"Вася" : '300',
"Петя" : '400'}

for (let key in obj) {
   console.log(`${key}: ${obj[key]}`);
}

let num = 0;
let n = 1000;
for (; n >= 50; n /= 2) {
    num++;
}
console.log('Результат:', n);
console.log('Количество итераций:', num);


const firstFriday = 3;
const daysInMonth = 31;
let currentFriday = firstFriday;
console.log('Напоминания о подготовке отчёта:')
while (currentFriday <= daysInMonth) {
    console.log(`Сегодня пятница, ${currentFriday}-е число. Необходимо подготовить отчёт.`);
    currentFriday += 7;
}


let iterations = 0;
let k = 100;
for (; k > 0; k -= 7) {
    iterations++;
}
console.log('Результат:', k);
console.log('Количество итераций:', iterations);

const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];
for (let v = 0; v < months.length; v++) {
    console.log(`${v + 1}. ${months[v]}`);
}


const book = {
    название: 'Великий Гэтсби',
    автор: 'Фрэнсис Скотт Фицджеральд',
    'годиздания': 1925,
    жанр: 'Роман'
};
for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}


// Создаём массив из 10 случайных чисел (в диапазоне от 0 до 100)
const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1); 
}
console.log('Массив случайных чисел:', numbers);
// Находим минимальное число
let min = numbers[0]; // предполагаем, что первый элемент — минимальный
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log('Минимальное число:', min);


