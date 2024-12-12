import BaseController from './BaseController';
import usersList from '../test-data/users';

class AccountController extends BaseController {
	async getAuthToken(
		userName = usersList.mainUser.userName,
		userPassword = usersList.mainUser.password,
	) {
		const response = await this.axiosInstance.post(
			'/Account/v1/GenerateToken',
			{
				userName: userName,
				password: userPassword,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		console.log(response.data.token);
		return response.data.token;
	}

	async getUserId(
		userName = usersList.mainUser.userName,
		userPassword = usersList.mainUser.password,
	) {
		const response = await this.axiosInstance.post('/Account/v1/Login', {
			userName: userName,
			password: userPassword,
		});
		console.log(response.data.userId);
		return response.data.userId;
	}

	async getUserInfo(userId, token) {
		return await this.axiosInstance.get(`/Account/v1/User/${userId}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async createNewUser(
		userName = usersList.mainUser.userName,
		userPassword = usersList.mainUser.password,
	) {
		return await this.axiosInstance.post('/Account/v1/User', {
			userName: userName,
			password: userPassword,
		});
	}

	async deleteUser(userId = usersList.mainUser.userId, token) {
		return await this.axiosInstance.delete(`/Account/v1/User/${userId}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
	}
}

export default new AccountController();
