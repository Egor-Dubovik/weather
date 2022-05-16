import { getDate } from "./getDate.js";

export const getGeoInfo = (name) => {
	const url = `https://geocode-maps.yandex.ru/1.x/?apikey=e043db48-2b20-4ec4-90ba-fdf04488650c&format=json&results=1&geocode=${name}`;
	return getDate(url);
}