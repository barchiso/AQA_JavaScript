// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості
// (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of,
// переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    { name: 'John', email: 'john@mail.com', age: 30, city: 'New York' },
    { name: 'Jane', email: 'jane@mail.com', age: 25, city: 'Seattle' },
    { name: 'Bob', email: 'bob@mail.com', age: 35, city: 'Washington' },
    { name: 'Ann', email: 'ann@mail.com', age: 20, city: 'Los Angeles' },
    {
        name: 'Jeniffer',
        email: 'jenniffer@mail.com',
        age: 18,
        city: 'Chicago',
    },
];

for (const { name: firstName, email, age: years, city: address } of users) {
    console.log(
        `\nUser: ${firstName}.\nAge: ${years} years old.\nAddress: ${address}.\nEmail address: "${email}".`,
    );
}
