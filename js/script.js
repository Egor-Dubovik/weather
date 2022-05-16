import { Weather } from "./modules/weather.js";
import { showCurrentDate } from "./modules/showCurrentDate.js";
import { getGeoInfo } from "./modules/getGeoInfo.js";


// render current weather ---------------------------------------------------
const weather = new Weather;
await weather.getCurrentСoords();

await weather.showForecast();
showCurrentDate(weather.timezone);



let position = [weather.lat, weather.lon];

const initMap = () => {
	const map = new ymaps.Map("map", {
		center: position,
		zoom: 10,
	});

	const placemark = new ymaps.Placemark(position,
		{
			balloonContentHeader: 'have a good day!',
		},
		{
			iconLayout: 'default#image',
			iconImageHref: '../assets/img/marker.png',
			iconImageSize: [40, 40],
			iconImageOffset: [-20, -40]
		}
	);

	map.controls.add('zoomControl', { top: 10, left: 5 });
	map.geoObjects.add(placemark);
}
ymaps.ready(initMap);

// find forecast for new place -------------------------------------------------

const searchForm = document.querySelector(".sidebar-weather__search-form");
const input = document.querySelector(".sidebar-weather__search-input");

searchForm.addEventListener("submit", search)

async function search(e) {
	e.preventDefault();
	const address = await getGeoInfo(input.value);
	const members = address.response.GeoObjectCollection.featureMember;
	input.value = "";

	if (!members.length) {
		alert("Enter right name!");
	} else {
		position = members[0].GeoObject.Point.pos.split(" ");
		[position[0], position[1]] = [position[1], position[0]];

		weather.lat = position[0];
		weather.lon = position[1];
	}

	const map = document.querySelector("#map ymaps");
	if (map) map.remove();

	ymaps.ready(initMap);
	clearInterval(window.timerId);
	await weather.showForecast();
	await showCurrentDate(weather.timezone, true);
}

// ------------------------------------------------------
const cityExamples = document.querySelector(".sidebar-weather__example-cities");

const showCityExamples = (e) => {
	if (e.target.closest("li")) {
		input.value = e.target.textContent;
		search(e);
	}
}

cityExamples.addEventListener("click", showCityExamples);

