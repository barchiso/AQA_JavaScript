//  Task #1.
//  Short Long Short
//  Given 2 strings, a and b, return a string of the form short+long+short,
//  with the shorter string on the outside and the longer string on the inside.
//  The strings will not be the same length, but they may be empty ( zero length ).

//  For example: (Input1, Input2) --> output
//  ("1", "22") --> "1221"
//  ("22", "1") --> "1221"
//  ShortLongShort.solution("1", "22"); // returns "1221"
//  ShortLongShort.solution("22", "1"); // returns "1221"

function solution(a, b) {
	//  Using ternary conditional operator.
	return a.length < b.length ? a + b + a : b + a + b; //  This is same as in commented if-else block
	//  Using if...else, explicit block syntax
	//   if (a.length < b.length) {
	//     return a + b + a
	//   } else {
	//     return b + a + b
	//   }

	//  Using if..., implicit else, compressed syntax
	//   if (a.length < b.length) return a + b + a
	//   return b + a + b

	//  Using separate Arrow function and ternary conditional operator.
	//   const shortLongShort = (a, b) =>
	// 		a.length < b.length ? a + b + a : b + a + b
}

console.log(solution('1', '22'));
console.log(solution('22', '1'));
console.log(solution('Hello', 'World'));
console.log(solution('0', '0'));
console.log(solution('322', ''));
console.log(solution('3', '8.4'));
console.log(solution(3, 0.4));
console.log(solution('3', '-4'));
console.log(solution(-3, 8));
console.log(solution('-8', '-4'));

//  Task #2.
//  Is it even?
//  In this Kata we are passing a number (n) into a function.
//  Your code will determine if the number passed is even (or not).
//  The function needs to return either a true or false.
//  Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
	return n % 2 === 0;
}

// Using separate Arrow function
const isEven = (n) => n % 2 === 0; //  Using separate Arrow function

console.log(testEven(8));
console.log(testEven(15));
console.log(testEven(0));
console.log(testEven(-16));
console.log(testEven(-5));
console.log(testEven(8.4));

console.log(isEven(8));
console.log(isEven(15));
console.log(isEven(0));

//  Task #3.
//  Transportation on vacation.
//  After a hard quarter in the office you decide to get some rest on a vacation.
//  So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//  You will need a rental car in order for you to get around in your vacation.
//  The manager of the car rental makes you some good offers.
//  Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
//  Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//  Write a code that gives out the total amount for different days(d).

//  Using function declaration.
function rentalCarCost(d) {
	if (d <= 0) {
		return `You must rent more than one day`;
	} else if (d < 3) {
		return 40 * d;
	} else if (d < 7) {
		return 40 * d - 20;
	} else if (d >= 7) {
		return 40 * d - 50;
	} else {
		return `Number (integer) should be entered`;
	}
}
console.log(rentalCarCost('some text'));
console.log(rentalCarCost(-1));
console.log(rentalCarCost(0));
console.log(rentalCarCost(1));
console.log(rentalCarCost(3));
console.log(rentalCarCost(7));
console.log(rentalCarCost(100));

//  Using function expression.
const rentalCarCostExpression = function (d) {
	if (d <= 0) return `You must rent more than one day`;
	if (d < 3) return 40 * d;
	if (d < 7) return 40 * d - 20;
	if (d >= 7) return 40 * d - 50;
	return `Number (integer) should be entered`;
};

console.log(rentalCarCostExpression('some text'));
console.log(rentalCarCostExpression(-1));
console.log(rentalCarCostExpression(0));
console.log(rentalCarCostExpression(1));
console.log(rentalCarCostExpression(3));
console.log(rentalCarCostExpression(7));
console.log(rentalCarCostExpression(100));

//  Using  Arrow function and ternary conditional operator.
//  Not sure if it is good practice to use Arrow function and ternary conditional operator as solution for this task.
const rentalCarCostArrow = (d) =>
	d <= 0
		? `You must rent more than one day`
		: d < 3
			? 40 * d
			: d < 7
				? 40 * d - 20
				: d >= 7
					? 40 * d - 50
					: `Number (integer) should be entered`;

console.log(rentalCarCostArrow('some text'));
console.log(rentalCarCostArrow(-1));
console.log(rentalCarCostArrow(0));
console.log(rentalCarCostArrow(1));
console.log(rentalCarCostArrow(3));
console.log(rentalCarCostArrow(7));
console.log(rentalCarCostArrow(100));
