//  Завдання 1
//  1. Створіть функцію яка приймає два параметри: width і height.
//  2. Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
//  3. Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
//  4. Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

//  Using function declaration.
function rectangleSquare(width, height) {
  return width * height;
}

console.log(rectangleSquare(5, 10));

//  Using function expression.
const rectangleSquareExpression = function (width, height) {
  return width * height;
};

console.log(rectangleSquareExpression(5, 10));

//  Using arrow function.
const rectangleSquareArrow = (width, height) => width * height;

console.log(rectangleSquareArrow(5, 10));
