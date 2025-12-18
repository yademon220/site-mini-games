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


// Переверни текст
function turnTheTextOver() {
  const userInput = prompt(`Введите слово. `);

  if (!userInput || userInput.trim() === '') {
     alert(`Вы не ввели слово`);
    return;
  }

  if (!/^[a-zA-Za-яА-ЯёЁ]+$/.test(userInput.trim())) {
  alert('Пожалуйста, введите только буквы!');
  return;
  }

  let TextOver = userInput.trim().split('').reverse().join('');
  alert(`Перевернутое слово выглядит так: ${TextOver}.`);
}


// Викторина
function Quiz() {
  const quiz = [
    {
      question: "Какого цвета небо?",
      options: ["1. Красный", "2. Синий", "3. Зелёный"],
      correctAnswer: 2
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2
    }
  ];

  let userScore = 0;

  for (let i = 0; i < quiz.length; i++) {
    // Получаем ввод (возможны null или строка)
    const userInput = prompt(`
Вопрос ${i + 1} из ${quiz.length}:
${quiz[i].question}

Варианты:
${quiz[i].options.join('\n')}
Введите номер ответа (1, 2 или 3):
    `);

    // Проверяем отмену ввода (null) или пустой ввод
    if (userInput === null || userInput.trim() === '') {
      alert('Вы не ввели ответ. Пропускаем вопрос.');
      continue;
    }

    const answerNumber = parseInt(userInput.trim(), 10);

    // Валидация ввода
    if (isNaN(answerNumber) || answerNumber < 1 || answerNumber > 3) {
      alert('Некорректный ввод. Введите число 1, 2 или 3.');
      continue;
    }

    // Сравнение с правильным ответом (числа!)
    if (answerNumber === quiz[i].correctAnswer) {
      userScore += 1;
      alert(`✅ Верно! Ваш текущий счёт: ${userScore}.`);
    } else {
      userScore -= 1;
      alert(`❌ Неверно! Правильный ответ: ${quiz[i].correctAnswer}.
Ваш текущий счёт: ${userScore}.`);
    }
  }

  // Итоговый результат (без лишнего вычитания)
  alert(`
🎯 Викторина завершена!

Ваш итоговый счёт: ${Math.max(0, userScore)}.

Спасибо за участие!
  `);
}

Quiz1();



//«Камень, ножницы, бумага»
function rockPaperScissors() {
  let userHit = prompt(`Это "Камень, ножницы, бумага".
Игра началась.
Что поставишь?`);

  const arrWeapons = ['камень', 'ножницы', 'бумага'];

  // Проверка на пустой ввод
  if (!userHit || userHit.trim() === '') {
    alert('Вы не ввели слово');
    return;
  }

  // Проверка на корректность символов (только буквы)
  if (!/^[a-zA-Za-яА-ЯёЁ]+$/.test(userHit.trim())) {
    alert('Пожалуйста, введите только буквы!');
    return;
  }

  // Приводим ввод пользователя к нижнему регистру и убираем пробелы
  userHit = userHit.trim().toLowerCase();

  // Проверяем, есть ли введённое слово в списке допустимых
  const userIndex = arrWeapons.indexOf(userHit);
  if (userIndex === -1) {
    alert('Пожалуйста, введите "камень", "ножницы" или "бумага"');
    return;
  }

  // Случайный выбор компьютера
  const AINumberHit = Math.floor(Math.random() * 3);
  const AIHit = arrWeapons[AINumberHit];

  let refereeDecision;

  // Определяем результат
  if (userIndex === AINumberHit) {
    refereeDecision = 'Ничья';
  } else if (
    (userIndex === 0 && AINumberHit === 1) || // камень > ножницы
    (userIndex === 1 && AINumberHit === 2) || // ножницы > бумага
    (userIndex === 2 && AINumberHit === 0)    // бумага > камень
  ) {
    refereeDecision = 'Победа';
  } else {
    refereeDecision = 'Поражение';
  }

  // Итоговый результат
  alert(`
Игра завершена!

Вы поставили: ${userHit}.
Противник поставил: ${AIHit}.

Итог: ${refereeDecision}.

Спасибо за участие!
  `);
}




function rockPaperScissors1(onStart, onInputError, onResult) {
  // Вызываем колбэк начала игры
  if (typeof onStart === 'function') {
    onStart();
  }

  let userHit = prompt(`Это "Камень, ножницы, бумага".
Игра началась.
Что поставишь?`);

  const arrWeapons = ['камень', 'ножницы', 'бумага'];

  // Проверка на пустой ввод
  if (!userHit || userHit.trim() === '') {
    if (typeof onInputError === 'function') {
      onInputError('Вы не ввели слово');
    } else {
      alert('Вы не ввели слово');
    }
    return;
  }

  // Проверка на корректность символов (только буквы)
  if (!/^[a-zA-Za-яА-ЯёЁ]+$/.test(userHit.trim())) {
    if (typeof onInputError === 'function') {
      onInputError('Пожалуйста, введите только буквы!');
    } else {
      alert('Пожалуйста, введите только буквы!');
    }
    return;
  }

  // Приводим ввод пользователя к нижнему регистру и убираем пробелы
  userHit = userHit.trim().toLowerCase();

  // Проверяем, есть ли введённое слово в списке допустимых
  const userIndex = arrWeapons.indexOf(userHit);
  if (userIndex === -1) {
    if (typeof onInputError === 'function') {
      onInputError('Пожалуйста, введите "камень", "ножницы" или "бумага"');
    } else {
      alert('Пожалуйста, введите "камень", "ножницы" или "бумага"');
    }
    return;
  }

  // Случайный выбор компьютера
  const AINumberHit = Math.floor(Math.random() * 3);
  const AIHit = arrWeapons[AINumberHit];

  let refereeDecision;

  // Определяем результат
  if (userIndex === AINumberHit) {
    refereeDecision = 'Ничья';
  } else if (
    (userIndex === 0 && AINumberHit === 1) || // камень > ножницы
    (userIndex === 1 && AINumberHit === 2) || // ножницы > бумага
    (userIndex === 2 && AINumberHit === 0)    // бумага > камень
  ) {
    refereeDecision = 'Победа';
  } else {
    refereeDecision = 'Поражение';
  }

  // Вызываем колбэк результата
  if (typeof onResult === 'function') {
    onResult({
      userChoice: userHit,
      aiChoice: AIHit,
      result: refereeDecision
    });
  } else {
    alert(`
Игра завершена!

Вы поставили: ${userHit}.
Противник поставил: ${AIHit}.

Итог: ${refereeDecision}.

Спасибо за участие!
    `);
  }
}
