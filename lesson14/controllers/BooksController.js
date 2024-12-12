import BaseController from './BaseController';

class BooksController extends BaseController {
	async getAllBooks() {
		return await this.axiosInstance('/BookStore/v1/Books');
	}

	async getSpecificBook(bookId, token) {
		return await this.axiosInstance.get(
			`/BookStore/v1/Book?ISBN=${bookId}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}

	async addBook(userId, bookId, token) {
		return await this.axiosInstance.post(
			'/BookStore/v1/Books',
			{
				userId: userId,
				collectionOfIsbns: [
					{
						isbn: bookId,
					},
				],
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}

	async deleteSpecificBook(userId, bookId, token) {
		console.log('Token:', token);
		return await this.axiosInstance.delete(`/BookStore/v1/Book`, {
			data: {
				isbn: bookId,
				userId: userId,
			},
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async deleteAllBooks(userId, token) {
		return await this.axiosInstance.delete(
			`/BookStore/v1/Books?UserId=${userId}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}
}

export default new BooksController();
