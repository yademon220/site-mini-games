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
