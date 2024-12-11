//  Завдання 6: Сортування масивів
//  У вас є вихідний масив
//  сonst numbersList = [1,10,14,2,4,5,43,34]
//  1. Створіть новий масив на основі вихідного масиву (копіюйте його)
//  2. Відсортуйте створений масив (від меншого до більшого)
//  3. Виведіть обидва масиви в консоль

//  Create function to sort array in ascending order.
const sortedArray = (numbers) => {
  // a - first element.
  // b - second element.
  return numbers.sort(function (a, b) {
    return a - b;
  });
};

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

console.log(numbersList);
console.log(sortedArray(numbersList)); //  [1,  2,  4,  5, 10, 14, 34, 43]
