// Завдання 2
// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

// Create object book.
const book = {
  title: String, // title: string, presents book name.
  author: String, // author: string, presents book author.
  year: Number, // year: number, presents book release date.
};

// Output destructured variables to the console
const bookInfo = ({ title, author }) => {
  book.title = title;
  book.author = author;
  console.log(
    `Book title: "${title}" and book author: "${author}" are added to book object.`,
  );
  return book;
};

bookInfo({
  title: 'The Expanse: Leviathan Wakes',
  author: 'James S. A. Corey',
});

console.log(book);
