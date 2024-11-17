//  Завдання 3: Обчислення суми елементів масиву
//  Вам потрібно створити програму, яка обчислює суму всіх елементів у масиві за допомогою методу reduce.
//  Ось кроки, які вам потрібно виконати:
//  1. Створіть масив чисел, наприклад, [10, 20, 30, 40, 50].
//  2. Використовуючи метод reduce, обчисліть суму всіх елементів масиву.
//  3. Виведіть отриману суму на консоль.

//  Create function to sum of array elements.
const sumNumbers = numbers => {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const numbers = [10, 20, 30, 40, 50];
console.log(sumNumbers(numbers)); // 150
