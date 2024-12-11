// Завдання 4
// Створіть об'єкт person з такими властивостями:
// firstName: рядок, представляє ім'я особи.
// lastName: рядок, представляє прізвище особи.
// age: число, представляє вік особи.
// Додайте до об'єкта person властивість email,
// яка буде містити електронну пошту особи.
// Видаліть властивість age з об'єкта person.
// Виведіть оновлений об'єкт person в консоль.

const person = {
  firstName: String, // firstName: string, presents student's first name.
  lastName: String, // lastName: string, presents student's last name.
  age: Number, // age: number, presents student's age.
};

person.firstName = 'Johnny'; // changing firstName property from string in person object.
person.lastName = 'Bravo'; // changing lastName property from string in person object.
delete person.age; // delete age from person object
person.email = 'johnny.bravo@mail.com'; // add new property email to person object.

console.log(person);
