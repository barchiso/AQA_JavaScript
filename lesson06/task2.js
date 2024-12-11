//  Завдання 2
//  1. Створіть функцію яка приймає один параметр: age.
//  2. Усередині функції перевірте, чи age більше або рівне 18.
//  3. Якщо age відповідає умові, поверніть true, інакше поверніть false.
//  4. Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.

//  Using function declaration.
function isAdult(age) {
    return age >= 18;
}

console.log(isAdult(25));
console.log(isAdult(15));
console.log(isAdult(18));
console.log(isAdult(17.5));

//  Using function expression.
const isAdultExpression = function (age) {
    return age >= 18;
};

console.log(isAdultExpression(25));
console.log(isAdultExpression(15));
console.log(isAdultExpression(18));
console.log(isAdultExpression(17.5));

//  Better optimized for this function use Arrow function.
const isAdultArrow = (age) => age >= 18;

console.log(isAdultArrow(25));
console.log(isAdultArrow(15));
console.log(isAdultArrow(18));
console.log(isAdultArrow(17.5));
