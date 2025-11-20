import './style.css';
import { CurrentWeather } from './CurrentWeather.js';
import { Giphy } from './Giphy.js';

const weather = new CurrentWeather();
const giphy = new Giphy();

const [weatherData, giphyData] = await Promise.all([weather.get(), giphy.get()]);

const data = { weatherData, giphyData };

