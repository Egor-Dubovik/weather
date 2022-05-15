import { getDate } from "./getDate.js";

// let gg = require("api-maps.yandex.ru/2.1/?load=package.full&lang=ru-RU");

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

	async getCurrentСoords() {
		let pos = await new Promise(resolve => {
			navigator.geolocation.getCurrentPosition(resolve);
		}).catch(err => console.error(err));

		return {
			lat: pos.coords.latitude,
			lon: pos.coords.longitude
		}
	}

	async showForecast() {
		// weatherBlock.innerHTML = `
		// <div class="weather">
		// 	<img src="./assets/img/load.gif" alt="Loading...">
		// </div>	
		// `;




		const { lat, lon } = await this.getCurrentСoords();
		const data = await this.getForecast(lat, lon, "metric");

		console.log(data)



		// let b = await a.json();
		// const name = data.city.name;
		// const temp = data.;
		// const tempMax = data.;
		// const tempMin = data.;
		// const feelsLike = data.;
		// const description = data.;
		// const description = data.;

		// console.log(geocoder);
		// return data
	};
}



