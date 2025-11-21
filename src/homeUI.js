import { Giphy } from './giphy.js';
import { organizeWeatherData } from './organizeWeatherData.js';
const weatherDomObject = {
    location: document.querySelector('.js-location'),
    temp: document.querySelector('.js-temp'),
    date: document.querySelector('.js-date'),
    // time: document.querySelector('.js-time'),
    feels: document.querySelector('.js-feels'),
    rain: document.querySelector('.js-rain'),
    sunrise: document.querySelector('.js-sunrise'),
    sunset: document.querySelector('.js-sunset'),
};
const giphyDomObject = document.querySelector('.giphy');

export function buildApp(weatherData) {
    // localStorage.clear();
    loadWeatherData(weatherData);
    loadGiphy();
}

function loadWeatherData(weatherData) {
    organizeWeatherData(weatherData);
}
function loadGiphy(giphyData) {
    // giphyDomObject.src = giphyData.data.images.original.url;
}
