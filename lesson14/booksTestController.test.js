import BooksController from './controllers/BooksController';
import AccountController from './controllers/AccountController';
import booksList from './test-data/books';
import usersList from './test-data/users';

let token;
let userId;
let userName = usersList.mainUser.userName;
let userPassword = usersList.mainUser.password;

describe('Receive books info', () => {
	test('Get all books info', async () => {
		const response = await BooksController.getAllBooks();
		console.log(response.data.books[0]);
		expect(response.status).toEqual(200); // asserting if the response code is 200
		expect(response.data.books).toHaveLength(8); // asserting if the response data have 8 books
		expect(response.data.books[0].isbn).toBe('9781449325862'); // asserting if the book isbn to be 9781449325862
		expect(response.data.books[0].title).toBe('Git Pocket Guide'); // asserting if the book title to be '<expected text>.'
		expect(response.data.books[0].author).toBe('Richard E. Silverman'); // asserting if the book author to be '<expected text>.'
		expect(response.data.books[0].publisher).toBe("O'Reilly Media"); // asserting if the book publisher to be '<expected text>.'
	});

	test('Get specific book info without Authorization', async () => {
		const response = await BooksController.getSpecificBook(
			booksList[7].isbn,
			token,
		);
		console.log(response.data);
		expect(response.status).toEqual(200); // asserting if the response code is 200
		expect(response.data.isbn).toBe(booksList[7].isbn); // asserting if the book isbn to be 9781449325862
		expect(response.data.title).toBe(booksList[7].title); // asserting if the book title to be '<expected text>.'
		expect(response.data.author).toBe(booksList[7].author); // asserting if the book author to be '<expected text>.'
		expect(response.data.publisher).toBe(booksList[7].publisher); // asserting if the book publisher to be '<expected text>.'
		expect(response.data.pages).toBe(booksList[7].pages); // asserting if the book pages to be 352
	});
});

describe('User creation', () => {
	test('Create user', async () => {
		const response = await AccountController.createNewUser(
			userName,
			userPassword,
		);
		console.log(response.data);
		userId = response.data.userID;
		console.log(userId);
		expect(response.status).toEqual(201); // asserting if the response code is 200
		expect(response.data.userID).toBe(userId); // asserting if the response data length to be 10
		expect(response.data.username).toBe(usersList.mainUser.userName); // asserting if the response data id to be 1
		expect(response.data.books).toHaveLength(0); // asserting if the response data name to be '<expected text>.'
	});

	test('Negative: Create existed user', async () => {
		const response = await AccountController.createNewUser(
			userName,
			userPassword,
		);
		console.log(response.data);
		console.log(response.status);
		expect(response.status).toEqual(406); // asserting if the response code is 406
		expect(response.data.code).toBe('1204');
		expect(response.data.message).toBe('User exists!');
	});
});

describe('Adding and removing books', () => {
	beforeAll(async () => {
		token = await AccountController.getAuthToken();
		userId = await AccountController.getUserId();
		const response = await BooksController.deleteAllBooks(userId, token);
		expect(response.status).toEqual(204);
	});

	test('Get user info', async () => {
		const response = await AccountController.getUserInfo(userId, token);
		console.log(response.data);
		console.log(response.status);

		expect(response.status).toEqual(200); // asserting if the response code is 200 result
		expect(response.data.userId).toBe(userId);
		expect(response.data.username).toBe(userName);
		expect(response.data.books).toHaveLength(0);
	});

	test('Add first book to a user', async () => {
		const response = await BooksController.addBook(
			userId,
			booksList[0].isbn,
			token,
		);
		console.log(response.status);
		console.log(response.data);
		expect(response.status).toEqual(201); // asserting if the response code is 201
		expect(response.data.books[0].isbn).toBe(booksList[0].isbn);
	});

	test('Add second book to a user', async () => {
		const response = await BooksController.addBook(
			userId,
			booksList[1].isbn,
			token,
		);
		console.log(response.status);
		console.log(response.data);
		expect(response.status).toEqual(201); // asserting if the response code is 201
		expect(response.data.books[0].isbn).toBe(booksList[1].isbn);
	});

	test('Add third book to a user', async () => {
		const response = await BooksController.addBook(
			userId,
			booksList[2].isbn,
			token,
		);
		console.log(response.status);
		console.log(response.data);
		expect(response.status).toEqual(201); // asserting if the response code is 201
		expect(response.data.books[0].isbn).toBe(booksList[2].isbn);
	});

	test('Add fourth book to a user', async () => {
		const response = await BooksController.addBook(
			userId,
			booksList[3].isbn,
			token,
		);
		console.log(response.status);
		console.log(response.data);
		expect(response.status).toEqual(201); // asserting if the response code is 201
		expect(response.data.books[0].isbn).toBe(booksList[3].isbn);
	});

	test('Get last book info', async () => {
		const response = await BooksController.getSpecificBook(
			booksList[3].isbn,
			token,
		);
		console.log(response.data);
		expect(response.status).toEqual(200);
		expect(response.data.isbn).toBe(booksList[3].isbn);
		expect(response.data.title).toBe(booksList[3].title);
		expect(response.data.subTitle).toBe(booksList[3].subTitle);
		expect(response.data.author).toBe(booksList[3].author);
		expect(response.data.publish_date).toBe(booksList[3].publish_date);
		expect(response.data.publisher).toBe(booksList[3].publisher);
		expect(response.data.pages).toBe(booksList[3].pages);
		expect(response.data.description).toBe(booksList[3].description);
		expect(response.data.website).toBe(booksList[3].website);
	});

	test('Get user info after adding books', async () => {
		const response = await AccountController.getUserInfo(userId, token);
		console.log(response.data);
		console.log(response.status);

		expect(response.status).toEqual(200); // asserting if the response code is 200 result
		expect(response.data.userId).toBe(userId);
		expect(response.data.username).toBe(userName);
		expect(response.data.books).toHaveLength(4);
		expect(response.data.books[0].isbn).toBe(booksList[0].isbn);
		expect(response.data.books[1].isbn).toBe(booksList[1].isbn);
		expect(response.data.books[2].isbn).toBe(booksList[2].isbn);
		expect(response.data.books[3].isbn).toBe(booksList[3].isbn);
	});

	test('Delete specific book', async () => {
		const response = await BooksController.deleteSpecificBook(
			userId,
			booksList[3].isbn,
			token,
		);
		console.log(response.status);
		console.log(response.data);
		expect(response.status).toEqual(204); // asserting if the response code is 204
	});

	test('Get user info after deleting specific books', async () => {
		const response = await AccountController.getUserInfo(userId, token);
		console.log(response.data);
		console.log(response.status);

		expect(response.status).toEqual(200); // asserting if the response code is 200 result
		expect(response.data.userId).toBe(userId);
		expect(response.data.username).toBe(userName);
		expect(response.data.books).toHaveLength(3);
		expect(response.data.books[0].isbn).toBe(booksList[0].isbn);
		expect(response.data.books[1].isbn).toBe(booksList[1].isbn);
		expect(response.data.books[2].isbn).toBe(booksList[2].isbn);
	});

	test('Delete all books', async () => {
		const response = await BooksController.deleteAllBooks(userId, token);
		console.log(response.status);
		expect(response.status).toEqual(204); // asserting if the response code is 204
	});

	test('Get user info after deleting all books', async () => {
		const response = await AccountController.getUserInfo(userId, token);
		console.log(response.data);
		console.log(response.status);

		expect(response.status).toEqual(200); // asserting if the response code is 200 result
		expect(response.data.userId).toBe(userId);
		expect(response.data.username).toBe(userName);
		expect(response.data.books).toHaveLength(0);
	});
});

describe('User deletion', () => {
	test('Delete user', async () => {
		const response = await AccountController.deleteUser(userId, token);
		console.log(response.data);
		expect(response.status).toEqual(204); // asserting if the response code is 204
	});

	test('Negative: Delete already removed user', async () => {
		const response = await AccountController.deleteUser(userId, token);
		console.log(response.data);
		expect(response.status).toEqual(200); // asserting if the response code is 200
		expect(response.data.code).toBe('1207');
		expect(response.data.message).toBe('User Id not correct!');
	});
});
