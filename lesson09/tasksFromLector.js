// Task #1. is word an isogram.
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement function that determines whether a string that contains only letters is an isogram.
// assume the empty string is an isogram. Ignore letter case.

// Example: (input --> output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

const isIsogram = (testString) => {
	// Lower all letters in the string.
	const stringLowerCase = testString.toLowerCase();

	// Get unique letters in string using Set.
	const uniqueString = new Set(stringLowerCase);

	// Return length comparison result of uniqueString.size and stringLowerCase.length
	return stringLowerCase.length === uniqueString.size;
};

console.log(isIsogram('Dermatoglyphics')); // --> true
console.log(isIsogram('aba')); // --> false
console.log(isIsogram('moOse')); // --> false
console.log(isIsogram('')); // --> true
console.log('-'.repeat(50));

// Task #2. Find shortest word in text.
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

const shortestWord = (textString) => {
	// Divide text string into array of words.
	const words = textString.split(' ');

	// Find shortest word in array.
	const wordShortest = Math.min(...words.map((word) => word.length));

	return wordShortest;
};

let text = 'Dermatoglyphics';
let text1 = 'Task #2.';
let text2 =
	'An isogram is a word that has no repeating letters, consecutive or non-consecutive.';
let text3 = 'The size property returns the number of elements in the set.';
let text4 =
	'Метод map створює новий масив, який є копією вихідного масиву та застосовує переданий колбек для кожного з елементів нового масиву.';

console.log(shortestWord(text)); // 15
console.log(shortestWord(text1)); // 3
console.log(shortestWord(text2)); // 1
console.log(shortestWord(text3)); // 2
console.log(shortestWord(text4)); // 1
console.log('-'.repeat(50));

// Task #3. Find The Parity Outlier.
// You are given an array (which will have a length of at least 3,
// but could be very large) containing integers.
// The array is either entirely comprised of odd integers or
// entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument
// and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

const findOutlier = (numbers) => {
	// Separate odd and even numbers
	const evens = numbers.filter((num) => num % 2 === 0);
	const odds = numbers.filter((num) => num % 2 !== 0);

	// Return the outlier based on which list has only one element
	return evens.length === 1 ? evens[0] : odds[0];
};

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11 (непарне число)
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160 (парне число)
console.log('-'.repeat(50));
