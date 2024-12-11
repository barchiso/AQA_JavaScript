// Завдання 2
// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user

// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2.
// Присвойте значення отримані від цих виразів до змінних

const fetchTodos = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (response) => response.json(),
  );
};

const fetchUsers = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (response) => response.json(),
  );
};

// Array with functions calls.
const promises = [
  fetchTodos(10),
  fetchTodos(15),
  fetchTodos(86),
  fetchUsers(1),
  fetchUsers(5),
  fetchUsers(8),
];

// Promise.all
Promise.all(promises)
  .then((data) => {
    console.log('Promise.all results:', data);
    console.log('-'.repeat(50));
  })
  .catch((errors) => {
    console.error('Error in Promise.all:', errors);
  });

// Promise.race
Promise.race(promises)
  .then((data) => {
    console.log('Promise.race result:', data);
    console.log('-'.repeat(50));
  })
  .catch((error) => {
    console.error('Error in Promise.race:', error);
  });
