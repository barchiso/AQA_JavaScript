//  Task #1. Calculate average.
//  Write function which calculates the average of the numbers in a given list.
//  Note: Empty array should return 0.

const getNumbersAverage = (numbersList) => {
    if (numbersList.length === 0)
        return 0
    return Number((numbersList.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / numbersList.length).toFixed(0))
}


let numbers = [12, 5, 20, 8, 15, 0, 25]  
let numbers1 = [-12, -5, -20, -8, -15, 0, -25]  
let numbers2 = [-12, 5, -20, 8, -15, 0, 25]  
let numbers3 = []  

console.log(getNumbersAverage(numbers));  //  12
console.log(getNumbersAverage(numbers1));   //  -12
console.log(getNumbersAverage(numbers2));  //  -1
console.log(getNumbersAverage(numbers3));  //  0
console.log('-'.repeat(50));

//  Task #2. Sum of two lowest positive integers.
//  Create function that returns the sum of two lowest positive numbers given in array of minimum 4 positive integers.
//  No floats or non-positive integers wil be passed.
//  For example, when array is passed like [19, 5, 42, 2, 77], the output should be 7.
//  [10, 343445353, 3453445, 3453545353453] should return 3453455.


const sumTwoLowestPosition = (numbersList) => {
    if (numbersList.length >= 4) {
        const sortedNumbers = numbersList.sort(function(a, b){return a - b});
        return sortedNumbers[0] + sortedNumbers[1];
    } else {
        return 'The array should have minimum 4 positive integers.'
    }

}


let integers = [19, 5, 42, 2, 77];
let integers1 = [10, 343445353, 3453445, 3453545353453];
let integers2 = [19, 5, 42];
let integers3 = [];

console.log(sumTwoLowestPosition(integers));  //  7
console.log(sumTwoLowestPosition(integers1));  //  3453455
console.log(sumTwoLowestPosition(integers2));  //  'The array should have minimum 4 positive integers.'
console.log(sumTwoLowestPosition(integers3));  //  'The array should have minimum 4 positive integers.'
console.log('-'.repeat(50));


//  Task #3. Between Extremes.
//  Given an array of numbers, return the difference between the largest and smallest values.
//  For example:
//  [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).
//  [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).
//  The array will contain a minimum of two elements.
//  Input data range guarantees that max-min will cause no integer overflow.


const betweenExtremes = (numbersList) => {
    const sortedNumbers = numbersList.sort(function(a, b){return a - b});
    return sortedNumbers[sortedNumbers.length-1] - sortedNumbers[0];

}


let numArray = [23, 3, 19, 21, 16];
let numArray1 = [1, 434, 555, 34, 112];

console.log(betweenExtremes(numArray));  //  20 (i.e., 23 - 3)
console.log(betweenExtremes(numArray1));  //  554 (i.e., 555 - 1)
console.log('-'.repeat(50));