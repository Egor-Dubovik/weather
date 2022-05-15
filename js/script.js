import { Weather } from "./modules/weather.js";


const weather = new Weather;
console.log(weather.showForecast());



function getPosition(elem, type) {
	const styles = window.getComputedStyle(elem, null)
	const value = styles[type]

	if (value) return parseInt(value);
	return 0
}

