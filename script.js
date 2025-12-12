// Угадай число
const guessTheNumber = () => {
    const secretNumber = Math.floor(Math.random() * 100) + 1; // Число от 1 до 100
    let attempts = 0;
    const maxAttempts = 7;

    alert(`Я загадал число от 1 до 100. Угадай! У тебя ${maxAttempts} попыток.`);

    while (attempts < maxAttempts) {
        const userInput = prompt(`Введите число. Осталось ${maxAttempts - attempts} попыток`);

        // Если игрок нажал «Отмена» — завершаем игру немедленно
        if (userInput === null) {
            alert("Игра завершена. До свидания!");
            return; // Выходим из функции, не предлагая сыграть снова
        }

        // Проверка на отмену (null) или пустой ввод
        if (userInput === null || userInput.trim() === "") {
            confirm("Вы отменили ввод или не ввели число. Попробуйте снова!");
            continue;
        }

        // Преобразование в число и проверка на NaN
        const userNumber = Number(userInput);
        if (isNaN(userNumber)) {
            alert("Пожалуйста, введите корректное число!");
            continue;
        }

        attempts++;

        if (userNumber > secretNumber) {
            alert("Неверно. Число должно быть меньше ;)");
        } else if (userNumber < secretNumber) {
            alert("Неверно. Число должно быть больше ;)");
        } else {
            alert(`Угадал!!! Загаданное число: ${secretNumber}. Попыток: ${attempts}`);
            return; // Выходим из функции после победы
        }
    }

    // Если попытки исчерпаны и число не угадано
    alert(`Исчерпаны все попытки! Число было: ${secretNumber}`);

    // Предложение сыграть ещё
    const playAgain = confirm("Хотите сыграть ещё?");
    if (playAgain) {
        guessTheNumber(); // Рекурсивный вызов
    }
};

// Простая арифметика
function randomMathProblems() {
  let tenNumb1;
  // Генерируем tenNumb1 от 2 до 100
  do {
    tenNumb1 = Math.floor(Math.random() * 100) + 1;
  } while (tenNumb1 === 1);

  let tenNumb2;
  let mathResult;

  const operations = {
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '-': (a, b) => a - b,
    '+': (a, b) => a + b
  };

  const symbols = Object.keys(operations);
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

  if (randomSymbol === '/') {
    // Ищем делители > 1, дающие результат >= 2
    const validDivisors = [];
    for (let i = 2; i <= tenNumb1; i++) {
      if (tenNumb1 % i === 0 && tenNumb1 / i >= 2) {
        validDivisors.push(i);
      }
    }

    // Если нет подходящих делителей — перегенерируем задачу (без глубокой рекурсии)
    if (validDivisors.length === 0) {
      return randomMathProblems(); // рекурсивный вызов
    }

    tenNumb2 = validDivisors[Math.floor(Math.random() * validDivisors.length)];
    mathResult = operations[randomSymbol](tenNumb1, tenNumb2);
  } else {
    do {
      // tenNumb2 от 2 до 100
      tenNumb2 = Math.floor(Math.random() * 99) + 2;
      mathResult = operations[randomSymbol](tenNumb1, tenNumb2);
    } while (
      !Number.isInteger(mathResult) || // должно быть целым
      mathResult < 2 ||             // не меньше 2
      mathResult > 100               // не больше 100
    );
  }

  return {
    num1: tenNumb1,
    num2: tenNumb2,
    operation: randomSymbol,
    correctResult: mathResult
  };
}

function runMathQuiz() {
  const problem = randomMathProblems();

  const problemText = `${problem.num1} ${problem.operation} ${problem.num2}`;

  let resultUser = prompt(`Я загадал следующий простой арифметический пример: ${problemText}.\nРеши его!`);


  if (resultUser === null) {
    alert("Вы отменили ввод.");
    return;
  }

  const userAnswer = parseFloat(resultUser);


  if (isNaN(userAnswer)) {
    alert("Пожалуйста, введите число.");
    return;
  }

  if (userAnswer === problem.correctResult) {
    alert("Верно!");
  } else {
    alert(`Не верно! Правильный ответ: ${problem.correctResult}. Тренируйся!`);
  }

  const playAgain = confirm("Хотите сыграть ещё?");
  if (playAgain) {
    runMathQuiz();
  }
}

document.getElementById('start-game').addEventListener('click', runMathQuiz);