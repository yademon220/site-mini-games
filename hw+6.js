//Задание 1
let twoLetters = 'js';
console.log(twoLetters.toUpperCase())

//Задание 2
const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
const search = 'молоко';

function filterByPrefix(products, search) {
    return products.filter(product => 
        product.toLowerCase().startsWith(search.toLowerCase())
    );
}

const filteredProducts = filterByPrefix(products, search);
console.log(filteredProducts);



//Задание 3
let toothNumber = 32.58884;
console.log(Math.floor(toothNumber)); 
console.log(Math.ceil(toothNumber));  
console.log(Math.round(toothNumber));


//Задание 4
let arrNumber = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...arrNumber)); // 21
console.log(Math.max(...arrNumber)); // 77


//Задание 5
function randomNumber () {
let RNumb = (Math.floor(Math.random() * 10) + 1);
console.log(RNumb);
}
randomNumber();

//Задание 6
function arrRandomNumbers() {
let userInput = Number(prompt(`Введите целое число`)); 
  
if (typeof userInput !== 'number' || !Number.isInteger(userInput) || userInput <= 0) {
        throw new Error('Аргумент должен быть положительным целым числом');
    }

let ARNumbers = [];
  
 let arbitraryArraySize = Math.floor(userInput / 2);
 
 for (let w = 0; w < arbitraryArraySize; w++) {
  let arbitraryArrayNumber = Math.floor(Math.random() * (userInput + 1));
  ARNumbers.push(arbitraryArrayNumber);
 }                                    
                                  
console.log(ARNumbers);
}

arrRandomNumbers();


//Задание 7
function rangeRandomNumbers(a, b) {
 let rangeNumber;
 a > b ? (rangeNumber = Math.floor(Math.random() * (a - b) + b)) : (rangeNumber = Math.floor(Math.random() * (b - a) + a));
 console.log(rangeNumber);
}                                    
rangeRandomNumbers(10, 20);


//Задание 8
let currentDate = new Date();
let options = { 
    day: '2-digit',
    month: '2-digit', 
    year: 'numeric',
};
console.log(currentDate.toLocaleString('ru-RU', options));


//Задание 9
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log('Текущая дата:', currentDate.toLocaleDateString('ru-RU'));
console.log('Через 73 дня будет:', futureDate.toLocaleDateString('ru-RU'));


//Задание 10
function formatDateTime(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
                  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = days[date.getDay()];
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    const formattedDate = `Дата: ${day} ${month} ${year} — это ${weekday}.`;
    const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;
    
    return `${formattedDate}\n${formattedTime}`;
}


console.log(formatDateTime(new Date()));
console.log(formatDateTime(new Date(2025, 11, 16, 16, 33, 23)));

