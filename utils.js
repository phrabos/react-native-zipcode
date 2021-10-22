const URL_DEV = 'http://localhost:8080';
const URL_PROD = 'https://ss-zipcodes.herokuapp.com';

export async function fetchZipCodes(action, zipcode) {
	try {
		const res = await fetch(`${URL_PROD}/${action}/${zipcode}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}
