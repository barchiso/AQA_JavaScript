//  Завдання 5: Об'єднання масивів
//  Вам потрібно створити програму, яка об'єднає два масиви в один
//  Ось кроки, які вам потрібно виконати:
//  1. Створіть два масиви, наприклад, firstArray і secondArray, які містять деякі значення.
//  2. Створіть новий масив, який містить всі елементи з обох вихідних масивів.
//  3. Виведіть отриманий об'єднаний масив на консоль.

//  Create function to  concatenate two arrays into one.
const concatArrays = (firstArray, secondArray) => {
    return firstArray.concat(secondArray);
};

const children = ['Cecile', 'Lone', 'Emil', 'Tobias', 'Linus'];
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log(concatArrays(children, fruits));
