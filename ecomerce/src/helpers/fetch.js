import { metodosPeticion } from '@/assets/constantes';

const baseUrl = 'https://localhost:7101/api/';

export const fetchAplicacion = (endpoint, data, method = metodosPeticion.GET.toString(), uri = '') => {
	const token = localStorage.getItem('token') || '';
	const url = `${baseUrl}${endpoint}`;

	if (method === metodosPeticion.GET.toString()) {
		return fetch(url, {
			method,

		});
	} else if (method === metodosPeticion.DELETE || method === metodosPeticion.PUT) {
		const urlD = `${baseUrl}${endpoint}?${uri}=${data}`;
		return fetch(urlD, {
			method,
		});
	} else {
		return fetch(url, {
			method,
			body: JSON.stringify(data),
		});
	}
};
