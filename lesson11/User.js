export class User {
    static async fetchUsers(id) {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`,
        );
        return await response.json();
    }
}
