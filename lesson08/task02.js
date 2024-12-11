//  Завдання 2: Копіювання з мутацією
//  Вам потрібно створити програму, яка мутує значення кожного елемента в масиві за допомогою методу map.
//  Ось кроки, які вам потрібно виконати:
//  1. Створіть початковий масив, наприклад, [1, 2, 3, 4, 5].
//  2. Створіть новий масив, де кожне значення це елемент вихідного масиву помножений на значення індексу відповідного елемента початкового масиву.
//  3. Виведіть новий масив на консоль.

// Create function to create new array with mutation
const arrayMutation = (numbers) => {
  return numbers.map((number, index) => number * index);
  // let newNumbers = [];
  // numbers.forEach(number => {
  //     newNumbers.push(number * numbers.indexOf(number))
  // });
  // return newNumbers;
};

const numbers = [1, 2, 3, 4, 5];
console.log(arrayMutation(numbers)); //  [ 0, 2, 6, 12, 20 ]
