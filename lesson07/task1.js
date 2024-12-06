//  Завдання 1
//  1. Створіть функцію handleNum яка буде приймати 3 параметри.
//     a) число
//     б) Колбек функцію яку треба викликати якщо передане число парне
//     в) Колбек функцію яку треба викликати якщо передане число непарне
//  2. Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd.
//     Кожна з них має виводити просте повідомлення в консоль.
//     Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
//  3. Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше

//  Create function handleNum which take three arguments:
//  number, handleEven, handleOdd
const handleNum = (number, handleEven, handleOdd) => {
	number % 2 === 0 ? handleEven(number) : handleOdd(number);
};

//  Create function handleEven which display message 'number is even' into console.
const handleEven = (number) => {
	console.log(`Number ${number} is even`);
};

//  Create function handleOdd which display message 'number is odd' into console.
const handleOdd = (number) => {
	console.log(`Number ${number} is odd`);
};

//  Call function with an arguments
handleNum(5, handleEven, handleOdd);
handleNum(8, handleEven, handleOdd);
