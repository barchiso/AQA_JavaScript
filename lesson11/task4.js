// Завдання 4 (Опціонально)
// Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.

import { Todo } from './Todo.js';
import { User } from './User.js';

// Використання Promise.all та Promise.race
const printData = async () => {
  const data = [
    Todo.fetchTodos(10),
    Todo.fetchTodos(15),
    Todo.fetchTodos(86),
    User.fetchUsers(1),
    User.fetchUsers(5),
    User.fetchUsers(8),
  ];

  // Виконання Promise.all
  try {
    const allResults = await Promise.all(data);
    console.log('Promise.all results:', allResults);
    console.log('-'.repeat(50));
  } catch (error) {
    console.error('Error in Promise.all:', error);
  }

  // Виконання Promise.race
  try {
    const raceResult = await Promise.race(data);
    console.log('Promise.race result:', raceResult);
    console.log('-'.repeat(50));
  } catch (error) {
    console.error('Error in Promise.race:', error);
  }
};

printData();
