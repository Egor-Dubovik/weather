export const getDate = (url) => {
	return fetch(url, {
		method: "GET",
	})
		.then(response => {
			if (response.ok) return response.json();
			throw `Error: ${response.status}`;
		})
		.catch(err => console.error(err));
};
