// Написати 5 тестів на API сервісу
// https://demoqa.com/books
// https://bookstore.toolsqa.com/swagger/

// user: JohnnyB
// pass: Johnny&Bravo9

import axios from 'axios';

const isbn = '9781593277574';
const isbnDel = '9781449325862';
const userId = '1f3d4e8a-b912-49c0-a08e-959def7b4a6a';

describe(`Book store API`, () => {
	describe.skip(`Users requests`, () => {
		test('Get generated token', async () => {
			const response = await axios.post(
				'https://demoqa.com/Account/v1/GenerateToken', // calling the get API
				{
					userName: 'JohnnyB',
					password: 'Johnny&Bravo9',
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			console.log(response.data.token);
			expect(response.status).toEqual(200); // asserting if the response code is 200 result
			expect(response.data.status).toBe('Success'); // asserting if the response status is 'Success'
			expect(response.data.result).toBe('User authorized successfully.'); // asserting if the response result is 'User authorized successfully.'
		});
	});

	describe(`Books requests`, () => {
		test('Get all books info', async () => {
			const response = await axios.get(
				'https://bookstore.toolsqa.com/BookStore/v1/Books', // calling the get API
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			console.log(response.data.books[0]);
			expect(response.status).toEqual(200); // asserting if the response code is 200
			expect(response.data.books).toHaveLength(8); // asserting if the response data have 8 books
			expect(response.data.books[0].isbn).toBe('9781449325862'); // asserting if the book isbn to be 9781449325862
			expect(response.data.books[0].title).toBe('Git Pocket Guide'); // asserting if the book title to be '<expected text>.'
			expect(response.data.books[0].author).toBe('Richard E. Silverman'); // asserting if the book author to be '<expected text>.'
			expect(response.data.books[0].publisher).toBe("O'Reilly Media"); // asserting if the book publisher to be '<expected text>.'
		});
	});

	describe(`Book info requests`, () => {
		const axiosInstance = axios.create({
			baseURL: 'https://demoqa.com/BookStore/v1',
			validateStatus: function (status) {
				return status;
			},
		});

		test('Get specific book info', async () => {
			const response = await axios.get(
				`https://bookstore.toolsqa.com/BookStore/v1/Book?ISBN=${isbn}`, // calling the get API
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			console.log(response.data);
			expect(response.status).toEqual(200); // asserting if the response code is 200
			expect(response.data.isbn).toBe(`${isbn}`); // asserting if the book isbn to be 9781449325862
			expect(response.data.title).toBe('Understanding ECMAScript 6'); // asserting if the book title to be '<expected text>.'
			expect(response.data.author).toBe('Nicholas C. Zakas'); // asserting if the book author to be '<expected text>.'
			expect(response.data.publisher).toBe('No Starch Press'); // asserting if the book publisher to be '<expected text>.'
			expect(response.data.pages).toBe(352); // asserting if the book pages to be 352
		});
		test('Delete specific book info', async () => {
			const response = await axiosInstance.delete(
				`https://demoqa.com/BookStore/v1/Book`, // calling the get API
				{
					isbn: `${isbnDel}`,
					userId: `${userId}`,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkpvaG5ueUIiLCJwYXNzd29yZCI6IkpvaG5ueSZCcmF2bzkiLCJpYXQiOjE3MzM4Nzg3MjN9.eZBGVRI2GL2uv-yNLHEPHPH1T1VIVKWlivm_dxUyAxs',
					},
				},
			);
			console.log(JSON.stringify(response.data));
			expect(response.status).toEqual(401); // asserting if the response code is 204
		});

		test('Add specific book to a user', async () => {
			const response = await axios.post(
				`https://bookstore.toolsqa.com/BookStore/v1/Books`,
				{
					userId: `${userId}`,
					collectionOfIsbns: [
						{
							isbn: `${isbnDel}`,
						},
					],
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkpvaG5ueUIiLCJwYXNzd29yZCI6IkpvaG5ueSZCcmF2bzkiLCJpYXQiOjE3MzM4Nzg3MjN9.eZBGVRI2GL2uv-yNLHEPHPH1T1VIVKWlivm_dxUyAxs',
					},
				},
			);
			console.log(response.data);
			expect(response.status).toEqual(201); // asserting if the response code is 200
			expect(response.data.books[0].isbn).toBe(`${isbnDel}`);
		});
	});
});
