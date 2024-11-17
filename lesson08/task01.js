//  Завдання 1: Відстеження кількості позитивних, негативних та нульових чисел
//  Ваше завдання - написати програму для обчислення кількості позитивних, негативних та нульових чисел у заданому масиві чисел.
//  1. Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
//  2. Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0.
//     Вони будуть використовуватись для відстеження кількості позитивних, негативних та нульових чисел в масиві.
//  3. Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
//  4. Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
//  5. Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.
//  Приклад виводу на консоль:
//   Кількість позитивних чисел: 3
//   Кількість негативних чисел: 2
//   Кількість нульових чисел: 2
//  Ваша програма повинна коректно підрахувати та вивести кількість позитивних, негативних та нульових чисел в заданому масиві.

// Create function to calculate quantity of  positive, negative and zero numbers.
const countPositiveNegativeZeroNumbers = numbers => {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number > 0) positiveCount++;
    if (number < 0) negativeCount++;
    if (number === 0) zeroCount++;
  }

  console.log(`Positive numbers: ${positiveCount}`);
  console.log(`Negative numbers: ${negativeCount}`);
  console.log(`Zero numbers: ${zeroCount}`);
};

const numbersList = [2, -5, 0, 7, -3, 0, 10, -8];
countPositiveNegativeZeroNumbers(numbersList);
