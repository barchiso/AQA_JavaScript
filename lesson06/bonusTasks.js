//  Задача #1. Функція додавання.
//  Напишіть тіло функції add що приймає два числа в якості параметрів та має повертати їх суму.

function add(a, b) {
    return a + b;
}

//  Using separate Arrow function
const addArrow = (a, b) => a + b;

console.log(add(5, 7));
console.log(add(0, -1));
console.log(add(0, 0));
console.log(add(-10, -8));
console.log(add(-5, 5));

console.log(addArrow(5, 7));
console.log(addArrow(0, -1));
console.log(addArrow(0, 0));
console.log(addArrow(-10, -8));
console.log(addArrow(-5, 5));

//  Задача #2. Функція для визначення парних чисел.
//  Імплементуйте функцію isEven, яка приймає число і повертає true, якщо число парне, і false, якщо число непарне.

function isEven(num) {
    return num % 2 === 0;
}

//  Using separate Arrow function
const isEvenArrow = (n) => n % 2 === 0;

console.log(isEven(8));
console.log(isEven(15));
console.log(isEven(0));
console.log(isEven(-16));
console.log(isEven(-5));
console.log(isEven(8.4));

console.log(isEvenArrow(8));
console.log(isEvenArrow(15));
console.log(isEvenArrow(0));
console.log(isEvenArrow(-16));
console.log(isEvenArrow(-5));
console.log(isEvenArrow(8.4));

//  Задача #3. Функція для розвороту рядка.
//  Напишіть тіло функції reverseString, яка приймає рядок і повертає його в зворотньому порядку.

function reverseString(str) {
    return Array.from(str).reverse().join('');
}

//  Using separate Arrow function
const reverseStringArrow = (str) => Array.from(str).reverse().join('');

console.log(reverseString(''));
console.log(reverseString('a'));
console.log(reverseString('Hello World!!!'));
console.log(reverseString('!!!-Hello-World-$$$!!!'));

console.log(reverseStringArrow(''));
console.log(reverseStringArrow('a'));
console.log(reverseStringArrow('Hello World!!!'));
console.log(reverseStringArrow('!!!-Hello-World-$$$!!!'));
