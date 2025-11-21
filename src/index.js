import './style.css';
import { CurrentWeather } from './CurrentWeather.js';
import { buildApp } from './homeUI.js';

const weather = new CurrentWeather();

const weatherData = await weather.get();
buildApp(weatherData);
