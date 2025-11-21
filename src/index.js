import './style.css';
import { CurrentWeather } from './CurrentWeather.js';
import { buildApp } from './homeUI.js';

const weather = new CurrentWeather();
const giphy = new Giphy();

const [weatherData, giphyData] = await Promise.all([weather.get()]);

const data = weatherData;

buildApp(data);
