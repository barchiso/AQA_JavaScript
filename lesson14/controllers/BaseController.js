import axios from 'axios';

class BaseController {
	constructor() {
		this.axiosInstance = axios.create({
			baseURL: 'https://bookstore.toolsqa.com',
			validateStatus: (status) => status,
		});
	}
}
export default BaseController;
