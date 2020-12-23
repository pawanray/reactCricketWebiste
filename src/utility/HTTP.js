import axios from 'axios';

const HTTP = axios.create({
	baseURL: 'https://cricapi.com/api',
	headers: {
		'Content-Type': 'application/json'
	}
});

export default HTTP;
