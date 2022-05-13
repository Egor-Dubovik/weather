import { getDate } from "./getDate.js";



export class Weather {
	#KEY = "107281430eadbfeb34098c3fdc1d890c";
	// #URL = "https://api.openweathermap.org/data/2.5/forecast?";
	#URL = "https://api.openweathermap.org/data/2.5/onecall?";
	//units=imperial - Fahrenheit / Celsius use units=metric

	constructor() {
		this.lang = "language=ru-RU";
	}


	getForecast(lat, lon, unit) {
		const url = `${this.#URL}lat=${lat}&lon=${lon}&units=${unit}&appid=${this.#KEY}`;
		return getDate(url);
	};
}


