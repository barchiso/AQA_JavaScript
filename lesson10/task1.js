// Створіть нову гілку в вашому репозиторії
// Створіть нову папку у вашому проекті де ви будете зберігати файли з домашкою
// У вас має бути 3 файли Book.js,EBook.js, task1.js

// Завдання 1
// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання"
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo.
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book.
// Додайте до класу EBook нову властивість, наприклад, "формат файлу".
// Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу).
// Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook.
// В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання.
// Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)
// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook

import { Book } from './Book.js';
import { EBook } from './EBook.js';

// Books creation.
const book1 = new Book(
  'The Expanse. Leviathan Wakes',
  'James S. A. Corey',
  2011,
);
const book2 = new Book(
  'The Witcher. Sword of Destiny',
  'Andrzej Sapkowski',
  1992,
);
const book3 = new Book('A Tale of Two Cities', 'Charles Dickens', 1859);
const book4 = new Book(
  "Harry Potter and the Philosopher's Stone",
  'J. K. Rowling',
  1997,
);
const book5 = new Book(
  "Alice's Adventures in Wonderland",
  'Lewis Carroll',
  1865,
);

// Display books info.
book1.printInfo();
book2.printInfo();
book3.printInfo();
book4.printInfo();
book5.printInfo();

// EBooks creation from Book.
const eBook = EBook.createBook(book1, 'EPUB');
const eBook1 = EBook.createBook(book3, 'EPUB');

// Display Ebooks info.
eBook.printInfo();
eBook1.printInfo();

// Search the oldest book from the books array of books and ebooks.
const books = [book1, book2, book3, book4, book5, eBook, eBook1];
const oldestBook = Book.oldestBook(books);
oldestBook.printInfo();
