// Завдання 3: Генерація таблиці множення

// Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .
// Виберіть число для якого потрібно згенерувати таблицю множення.
// Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
// Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.
// Приклад вхідних даних:
// const number = 5;
// Очікуваний результат:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

const number = 10;

console.log(`Таблиця множення числа ${number} використовуючи цикл 'for':`);

for (let multiplier = 1; multiplier <= 10; multiplier++) {
  console.log(`${number} x ${multiplier} = ${number * multiplier}`);
}

console.log(`\nТаблиця множення числа ${number} використовуючи цикл 'while':`);

let multiplier = 1;
while (multiplier <= 10) {
  console.log(`${number} x ${multiplier} = ${number * multiplier}`);
  multiplier++;
}

console.log(`\nТаблиця множення чисел використовуючи цикли 'for' і 'while':`);
for (let number = 1; number <= 10; number++) {
  let multiplier = 1;
  while (multiplier <= 10) {
    console.log(`${number} x ${multiplier} = ${number * multiplier}`);
    multiplier++;
  }
  console.log('');
}
