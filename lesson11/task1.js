// Завдання 1
// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент.
// Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

const textDisplay = (text, milliseconds) => {
  setTimeout(() => {
    console.log(text);
  }, milliseconds);
};

textDisplay("Hello World!!!", 1000);
textDisplay("Hello World!!!", 5000);
textDisplay("Hello World!!!", 10000);
textDisplay("Hello World!!!", 15000);
