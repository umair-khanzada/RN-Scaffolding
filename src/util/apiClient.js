import axios from 'axios';

const API_CLIENT = axios.create({
	baseURL: 'https://5d13c1e576f3f5001415f399.mockapi.io/api/v1/'
});

// request interceptor
const REQUEST_INTERCEPTOR = API_CLIENT.interceptors.request.use(
	function(config) {
		// TODO: uncomment Authorization header when token is available.
		// config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
		return config;
	},
	function(error) {
		return Promise.reject(error);
	}
);

// response interceptor
const RESPONSE_INTERCEPTOR = API_CLIENT.interceptors.response.use(
	function(response) {
		return response;
	},
	function(error) {
		let { response } = error;
		if (response && response.status === 401) {
			// Do logout;
			// Redirect to login;
			return Promise.reject(error.response);
		} else if (error.response) {
			// Do something.
			console.log('some API_CLIENT error');
			return Promise.reject(error.response);
		}
		return Promise.reject(error);
	}
);

// Note: ejectRequestInterceptors and ejectResponseInterceptors eject interceptors permanently.
function ejectRequestInterceptors() {
	API_CLIENT.interceptors.request.eject(REQUEST_INTERCEPTOR);
}

function ejectResponseInterceptors() {
	API_CLIENT.interceptors.response.eject(RESPONSE_INTERCEPTOR);
}

export { API_CLIENT, ejectRequestInterceptors, ejectResponseInterceptors };
