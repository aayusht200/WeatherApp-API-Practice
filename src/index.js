import './style.css';
import { CurrentWeather } from './CurrentWeather.js';
import { buildApp } from './homeUI.js';

const weather = new CurrentWeather();
const resetBtn = document.querySelector('.reset');
const weatherData = await weather.get();
resetBtn.addEventListener('click', () => {
    localStorage.clear();
    buildApp(weatherData);
});
buildApp(weatherData);
