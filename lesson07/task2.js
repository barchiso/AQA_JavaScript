//  Завдання 2
//  1. Створіть функцію яка приймає один параметр: num.
//  2. Усередині функції виведіть значення num в консоль.
//  3. Після цього, рекурсивно викличте функцію зі зменшеним значенням num (наприклад, num - 1).
//  4. Фунція повинна викликатися, доки num не стане менше або рівне 0.
//  5. Викличте вашу функцію з аргументом, наприклад, 5, щоб почати рекурсивний лічильник.

const handleNum = (num) => {
	//  Display value of num in the console.
	console.log(num);

	//  Recursively call a function with a reduced value of num (num - 1)
	//  until num is less or equal 0.
	num > 0 ? handleNum(num - 1) : 'End';
};

//  Call function with an argument 5, to start a recursive counter.
handleNum(5);
