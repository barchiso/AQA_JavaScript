// Завдання 1
// Створіть порожній об'єкт з ім'ям student.
// Додайте до об'єкта student наступні властивості:
// firstName: рядок, представляє ім'я студента.
// lastName: рядок, представляє прізвище студента.
// age: число, представляє вік студента.
// courses: масив, представляє список курсів, які він вивчає
// (наприклад, ["Математика", "Історія", "Програмування"]).

const student = {}; // Create empty object student.

// Add properties to student object.
student.firstName = String; // firstName: string, presents student's first name.
student.lastName = String; // lastName: string, presents student's last name.
student.age = Number; // age: number, presents student's age.
student.courses = ["Math", "History", "Programming"]; // courses: Array, presents student's list of courses.

console.log(student);

student.firstName = "Johnny"; // firstName: string, presents student's first name.
student.lastName = "Bravo"; // lastName: string, presents student's last name.
student.age = 23; // age: number, presents student's age.

console.log(student);
