//  Завдання 3
//  1. Створіть функцію divide, яка приймає два параметри:
//     numerator і denominator та повертає як результат виконання число отримане від ділення.
//  2. У функції треба поділити numerator на denominator і повернути результат.
//  3. Додайте валідацію в функції. У разі,
//     а) якщо denominator дорівнює 0
//     б) або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
//  4. Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок,
//     коли denominator дорівнює 0 або один з аргументів не є числом.
//  5. Огорніть кожен окремий виклик функції divide в try…catch.
//     Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

//  Creating function divide with error handling with Try...Catch...Finally block.
const divide = (numerator, denominator) => {
	try {
		//  Function denominator arguments equal 0 check.
		if (denominator === 0)
			throw new Error('Dividing to zero is unacceptable!');
		//  Function arguments check.
		if (typeof numerator !== 'number' || typeof denominator !== 'number')
			throw new Error('Both arguments should be numbers.');

		//  Display division result.
		console.log(numerator / denominator);
	} catch (error) {
		console.log('Error: ' + error.message); //  Error message display.
	} finally {
		console.log('Work completed.'); //  Final message display.
	}
};

//  Calling function divide with different arguments.
divide(15, 5); // 3
divide(0, 5); // 0
divide(15, 0); // Error: Dividing to zero is unacceptable!
divide('1=5', 5); // Error: Both arguments should be numbers.
divide(15, 'k5'); // Error: Both arguments should be numbers.
divide('!5', '05'); // Error: Both arguments should be numbers.
divide(0, 0); // Error: Dividing to zero is unacceptable!
divide(-36, 8); // -4.5
divide(-36, -8); // 4.5
divide(-11, -3); // 3.6666666666666665
