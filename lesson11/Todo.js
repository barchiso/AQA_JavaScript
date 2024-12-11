export class Todo {
    static async fetchTodos(id) {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`,
        );
        return await response.json();
    }
}
