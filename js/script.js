import { Weather } from "./modules/weather.js";
import { showCurrentDate } from "./modules/showCurrentDate.js";


const weather = new Weather;
await weather.getCurrentСoords();

showCurrentDate();
console.log(weather.showForecast());




