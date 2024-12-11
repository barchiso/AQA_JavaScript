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

// class EBook inherited from class Books.
export class EBook extends Book {
    constructor(name, author, publishYear, format) {
        super(name, author, publishYear);
        this.bookFormat = format;
    }

    // getter and setter for book format.
    get format() {
        return this.bookFormat;
    }

    set format(format) {
        this.bookFormat = format;
    }

    // Output method for EBook format.
    printInfo() {
        console.log(
            `Book "${this.bookTitle}" written by author ${
                this.bookAuthor
            } was published in ${
                this.bookYear
            } and has book format: "${this.bookFormat}".`,
        );
    }

    // Static method to create EBook from Book.
    static createBook(book, format) {
        return new EBook(book.name, book.author, book.publishYear, format);
    }
}
