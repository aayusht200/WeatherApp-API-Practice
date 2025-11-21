import { Giphy } from './Giphy.js';
import { organizeWeatherData } from './organizeWeatherData.js';

const weatherDomObject = {
    location: document.querySelector('.js-location'),
    temp: document.querySelector('.js-temp'),
    date: document.querySelector('.js-date'),
    // time: document.querySelector('.js-time'),
    average: document.querySelector('.js-average'),
    max: document.querySelector('.js-max'),
    min: document.querySelector('.js-min'),
    feels: document.querySelector('.js-feels'),
    rain: document.querySelector('.js-rain'),
    sunrise: document.querySelector('.js-sunrise'),
    sunset: document.querySelector('.js-sunset'),
};

export function buildApp(weatherData) {
    // localStorage.clear();
    loadWeatherData(weatherData);
}

async function loadWeatherData(weatherData) {
    const data = organizeWeatherData(weatherData);
    const giphyUrl = await loadGiphy(data.value);
    // giphyDomObject.src = giphyUrl;
    document.body.style.backgroundImage = `url(${giphyUrl})`;
    weatherDomObject.location.textContent = `Location: ${data.location[0].toUpperCase() + data.location.slice(1)}`;
    weatherDomObject.temp.textContent = `Current Temprature: ${data.currentTemp}°C`;
    weatherDomObject.date.textContent = `Date: ${data.date}`;
    weatherDomObject.average.textContent = `Average temprature: ${data.average}°C`;
    weatherDomObject.min.textContent = `Min temprature: ${data.min}°C`;
    weatherDomObject.max.textContent = `Max temprature: ${data.max}°C`;
    weatherDomObject.feels.textContent = `Feels Like: ${data.feels}°C`;
    weatherDomObject.rain.textContent = `Chance of rain: ${data.rain}`;
    weatherDomObject.sunrise.textContent = `Sunrise: ${data.sunrise} IST`;
    weatherDomObject.sunset.textContent = `Sunset: ${data.sunset} IST`;
}
async function loadGiphy(value) {
    const giphy = new Giphy();
    const giphyData = await giphy.get(value);
    return giphyData.data.images.original.url;
}
