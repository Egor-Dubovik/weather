import { getDate } from "./getDate.js";

// let gg = require("api-maps.yandex.ru/2.1/?load=package.full&lang=ru-RU");

const currentDay = document.querySelector(".current-day");
const city = document.querySelector(".current-day__city");
const time = document.querySelector(".current-day__time span");
const date = document.querySelector(".current-day__date");
const temp = document.querySelector(".current-day__temp");
const description = document.querySelector(".description-weather__text");
const weatherIconBox = document.querySelector(".description-weather__icon");
const feelsLike = document.querySelector(".current-day__feels-like span");
const sunrise = document.querySelector(".current-day__sunrise span");
const sunset = document.querySelector(".current-day__sunset span");
const forecastTrack = document.querySelector(".future-forecast__track");



export class Weather {
	#KEY = "107281430eadbfeb34098c3fdc1d890c";
	#URL = "https://api.openweathermap.org/data/2.5/onecall?";

	constructor() {
		this.lat;
		this.lon;
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

		this.lat = pos.coords.latitude;
		this.lon = pos.coords.longitude;
	}

	async showForecast() {
		const data = await this.getForecast(this.lat, this.lon, "metric");

		console.log(data)

		city.innerHTML = data.timezone.split("/").join("<br>");
		temp.textContent = Math.round(data.current.temp) + "°";
		feelsLike.textContent = Math.round(data.current.feels_like) + "°";
		sunrise.textContent = window.moment(data.current.sunrise * 1000).format("HH:mm");
		sunset.textContent = window.moment(data.current.sunset * 1000).format("HH:mm");
		description.textContent = data.current.weather[0].description;

		const icon = data.current.weather[0].icon;
		weatherIconBox.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">`;


		let nextDays = "";

		data.daily.forEach((day, index) => {
			if (index === 0) {
				nextDays +=
					`<li class="future-forecast__item">
						<h2 class="future-forecast__day future-forecast__day_today">today</h2>
						<div class="future-forecast__icon">
							<img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
						</div>
							<p class="future-forecast__time" id="day-time">Day: ${Math.round(day.temp.day)}°C</p>
						<p class="future-forecast__time" id="night-time">Night: ${Math.round(day.temp.night)}°C</p>
					</li>
				`;
			} else {
				nextDays +=
					`<li class="future-forecast__item">
					<h2 class="future-forecast__day">${window.moment(day.dt * 1000).format("ddd")}</h2>
					<div class="future-forecast__icon">
						<img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
					</div>
					<p class="future-forecast__time" id="day-time">Day: ${Math.round(day.temp.day)}°C</p>
					<p class="future-forecast__time" id="night-time">Night: ${Math.round(day.temp.night)}°C</p>
				</li>
				`;
			}
		});

		forecastTrack.innerHTML = nextDays;
	};
}



