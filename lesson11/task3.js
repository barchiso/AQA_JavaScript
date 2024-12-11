// Завдання 3
// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити.

const fetchTodos = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  return await response.json();
};

const fetchUsers = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  return await response.json();
};

// Використання Promise.all та Promise.race
const printData = async () => {
  const data = [
    fetchTodos(10),
    fetchTodos(15),
    fetchTodos(86),
    fetchUsers(1),
    fetchUsers(5),
    fetchUsers(8),
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
