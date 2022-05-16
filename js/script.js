import { Weather } from "./modules/weather.js";
import { showCurrentDate } from "./modules/showCurrentDate.js";
import { getGeoInfo } from "./modules/getGeoInfo.js";


// render current weather ---------------------------------------------------
const weather = new Weather;
await weather.getCurrentСoords();

showCurrentDate();
console.log(weather.showForecast());

async function search() {
	console.log(await getGeoInfo("Минск"));
}

search();

let center = [59.94, 30.32];

const initMap = () => {
	const map = new ymaps.Map("map", {
		center: center,
		zoom: 16,
	});

	const placemark = new ymaps.Placemark(center,
		{
			balloonContentHeader: 'Хедер балуна',
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
