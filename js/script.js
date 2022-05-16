import { Weather } from "./modules/weather.js";
import { showCurrentDate } from "./modules/showCurrentDate.js";
// import { initMap } from "./modules/initMap.js";
import { getDate } from "./modules/getDate.js";


const weather = new Weather;
await weather.getCurrentСoords();

showCurrentDate();
console.log(weather.showForecast());



let center = [59.94, 30.32];
// initMap(center);

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
