const URL_DEV = 'http://localhost:8080';
const URL_PROD = 'https://ss-zipcodes.herokuapp.com';

export async function fetchZipCodes(action, zipcode) {
	try {
		if (action === 'display') {
			const res = await fetch(`${URL_PROD}/${action}`);
			const data = await res.json();
			return data;
		} else {
			if (!zipcode) return 'please enter a valid zip code';
			else {
				const res = await fetch(`${URL_PROD}/${action}/${zipcode}`);
				const data = await res.json();
				return data;
			}
		}
	} catch (error) {
		console.error(error);
	}
}
