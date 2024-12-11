// Task # 1. How many are smaller than me?

// Write a function that given, an array arr,
// returns an array containing at each index i the amount of numbers
// that are smaller than arr[i] to the right.

// For example:
// Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// Input [1, 2, 0] => Output [1, 1, 0]

// Option 1.
const getSmaller = (numArray) => {
  // Initialization of result Array
  const result = [];

  // This loop iterates over every element of the input array arr using the index i.
  // For each iteration, we calculate the count of smaller numbers to the right of numArray[i].
  for (let i = 0; i < numArray.length; i++) {
    let count = 0;
    // For every numArray[i], the inner loop starts at i + 1 and iterates through all elements to the right of numArray[i].
    // A variable count is initialized to 0 for each iteration of the outer loop to keep track of the count of smaller numbers.
    for (let j = i + 1; j < numArray.length; j++) {
      // Inside the inner loop, each numArray[j] is compared with numArray[i].
      //If numArray[j] is smaller, the count is incremented.
      if (numArray[j] < numArray[i]) {
        count++;
      }
    }
    // Store the Count: After the inner loop completes for a specific numArray[i], the computed count is appended to the result array.
    result.push(count);
  }

  return result;
};

// Option 2.
const smaller = (numbers) => {
  // iterates over the numbers array.
  // For each element n at index i, it computes the number of smaller numbers to the right of n.
  // The map function returns a new array where each element corresponds to the result of the callback function for the respective index
  return numbers.map((n, i) => {
    // numbers.slice(i) creates a subarray starting from index i to the end of the numbers array.
    // filter(x => n > x) filters the subarray created by slice, keeping only the numbers (x) that are smaller than the current number n.
    // The length of the filtered array gives the count of numbers smaller than n.
    return numbers.slice(i).filter((x) => n > x).length;
  });
};

let numbers = [5, 4, 3, 2, 1];
let numbers1 = [1, 2, 0];

console.log(getSmaller(numbers)); // => Output [4, 3, 2, 1, 0]
console.log(getSmaller(numbers1)); // => Output [1, 1, 0]
console.log('-'.repeat(50));
console.log(smaller(numbers)); // => Output [4, 3, 2, 1, 0]
console.log(smaller(numbers1)); // => Output [1, 1, 0]
console.log('-'.repeat(50));

// Task # 2. Count the divisors of a number

// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000, but fixed tests go higher.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

// Note you should only return a number, the count of divisors.
// The numbers between parentheses are shown only for you to see which numbers are counted in each case.

const divisionCount = (num) => {
  // Initialize count is a variable that keeps track of the number of divisors found.
  let count = 0;

  // The loop runs from 1 to the square root of num.
  //  This optimization reduces the number of iterations needed compared to looping through all numbers from 1 to num.
  // The reason this works is that divisors come in pairs.
  // For example, if i is a divisor of num, then num/i is also a divisor.
  for (let i = 1; i <= Math.sqrt(num); i++) {
    // The modulus operator % checks if num is divisible by i.
    // If num % i === 0, then both i and num / i are divisors.
    if (num % i === 0) {
      count += 2; // If i is a divisor, we increment the count by 2 because both i and num/i are valid divisors.
    }
  }

  return count;
};

console.log(divisionCount(3));
console.log(divisionCount(4)); // --> 3
console.log(divisionCount(5)); // --> 2
console.log(divisionCount(12)); // --> 6
console.log(divisionCount(30)); // --> 8
console.log(divisionCount(36)); // --> 8
console.log(divisionCount(500000)); // --> 42
console.log(divisionCount(50000000)); // --> 72
console.log('-'.repeat(50));

// Task # 3. How many feelings?

// You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings).
// Your task is to return how many specific feelings are in the array.

// For example:
// string -> 'yliausoenvjw'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '3 feelings.' // 'awe', 'joy', 'love'

// string -> 'griefgriefgrief'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '1 feeling.' // 'grief'

// string -> 'abcdkasdfvkadf'
// array -> ['desire', 'joy', 'shame', 'longing', 'fear']
// output -> '0 feelings.'

// If the feeling can be formed once - plus one to the answer.
// If the feeling can be formed several times from different letters - plus one to the answer.
// Eeach letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.

// Option 1.
const specificFeelings = (testWord, stringsArray) => {
  // Initialize count
  let count = 0;

  //Loop through each word in the stringsArray and check if it can be constructed using the letters in the string.
  stringsArray.forEach((word) => {
    // A temporary copy of string is created for each word.
    // This copy is modified during the check to ensure that each letter in the string is only used once.
    let tempWord = testWord;

    // The word is split into an array of characters.
    // The every method checks if all characters in the word are present in tempString.
    // If any character is missing, the check fails for that word.
    let canFormed = word.split('').every((char) => {
      // tempString.includes(char) checks if the character exists in the current tempString.
      // If it exists, tempString = tempString.replace(char, '');
      // removes the first occurrence of the character to ensure it's not reused for the same word.
      if (tempWord.includes(char)) {
        tempWord = tempWord.replace(char, '');
        return true;
      }
      return false;
    });

    // If all characters in the word are found in the string, increment the count.
    if (canFormed) count++;
  });

  // Format the output as a string with the correct singular/plural form depending on the value of count.
  return `${count} feeling${count === 1 ? '' : 's'}.`;
};

// Option 2.
function countFeelings(str, arr) {
  // A Set is created from the string str. The Set automatically removes duplicate characters.
  const set = new Set(str);

  //The reduce method iterates through the arr (array of feelings) and calculates the total number of feelings that can be formed.
  const result = arr.reduce((accumulator, current) => {
    // For each feeling (c):
    // Convert it into an array of characters with [...current].
    // Use every to check if all characters in the feeling exist in the Set
    // If every returns true, the feeling can be formed.
    // Use the + unary operator to convert the boolean result (true or false) to 1 or 0, respectively.
    return accumulator + +[...current].every((e) => set.has(e)); // Add the result to the accumulator (accumulator).
  }, 0);

  return `${result} feeling${result === 1 ? '' : 's'}.`;
}

let word = 'yliausoenvjw';
let wordArray = ['anger', 'awe', 'joy', 'love', 'grief'];

let word1 = 'griefgriefgrief';
let wordArray1 = ['anger', 'awe', 'joy', 'love', 'grief'];

let word2 = 'abcdkasdfvkadf';
let wordArray2 = ['desire', 'joy', 'shame', 'longing', 'fear'];

console.log(specificFeelings(word, wordArray)); // output -> '3 feelings.' // 'awe', 'joy', 'love'
console.log(specificFeelings(word1, wordArray1)); // output -> '1 feeling.' // 'grief'
console.log(specificFeelings(word2, wordArray2)); // output -> '0 feelings.'
console.log('-'.repeat(50));

console.log(countFeelings(word, wordArray)); // output -> '3 feelings.' // 'awe', 'joy', 'love'
console.log(countFeelings(word1, wordArray1)); // output -> '1 feeling.' // 'grief'
console.log(countFeelings(word2, wordArray2)); // output -> '0 feelings.'
console.log('-'.repeat(50));
