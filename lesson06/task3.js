//  Завдання 3
//  1. Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
//  Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
//     available - доступна кількість товарів на складі
//     ordered - кількість одиниць товару в замовленні
//  2. Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”
//  3. Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”.
//  4. У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”.

//  Using function declaration.
function checkOrder(available, ordered) {
    if (ordered === 0) {
        return `Your order is empty.`;
    } else if (ordered > available) {
        return `Your order is too large, we don’t have enough goods.`;
    } else {
        return `Your order is accepted.`;
    }
}

console.log(checkOrder(5, 0)); //  `Your order is empty.`
console.log(checkOrder(5, 10)); //  `Your order is too large, we don’t have enough goods.`
console.log(checkOrder(10, 5)); //  `Your order is accepted.`
console.log(checkOrder(0, 2)); //  `Your order is too large, we don’t have enough goods.`

//  Using function expression.
const checkOrderExpression = function (available, ordered) {
    if (ordered === 0) return `Your order is empty.`;
    if (ordered > available)
        return `Your order is too large, we don’t have enough goods.`;
    return `Your order is accepted.`;
};

console.log(checkOrderExpression(5, 0)); //  `Your order is empty.`
console.log(checkOrderExpression(5, 10)); //  `Your order is too large, we don’t have enough goods.`
console.log(checkOrderExpression(10, 5)); //  `Your order is accepted.`
console.log(checkOrderExpression(0, 2)); //  `Your order is too large, we don’t have enough goods.`

//  Using  Arrow function and ternary conditional operator.
//  Not sure if it is good practice to use Arrow function and ternary conditional operator as solution for this task.
const checkOrderArrow = (available, ordered) =>
    ordered === 0
        ? `Your order is empty.`
        : ordered > available
          ? `Your order is too large, we don’t have enough goods.`
          : `Your order is accepted.`;

console.log(checkOrderArrow(5, 0)); //  `Your order is empty.`
console.log(checkOrderArrow(5, 10)); //  `Your order is too large, we don’t have enough goods.`
console.log(checkOrderArrow(10, 5)); //  `Your order is accepted.`
console.log(checkOrderArrow(0, 2)); //  `Your order is too large, we don’t have enough goods.`
